import { gsap } from "gsap";

// ========================================
// Initialize
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  initOpening();
  initModal();
  initContactForm();
  initParallax();
});

// ========================================
// Opening（FV の写真がぼかしから焦点が合うようにふわっと現れ、続いて文字も湯気のようにふわっと浮かぶ）
// ========================================
async function initOpening() {
  const root = document.documentElement;
  if (!root.classList.contains("is-opening")) return; // 動きを減らす設定では何もしない
  window.openingStarted = true; // head の保険（3 秒で解除）を止める

  // 写真を読み込んでから始める（遅い回線でも 1.5 秒で開始）
  const img = document.querySelector(".p-mv__img");
  if (img) await Promise.race([img.decode().catch(() => {}), new Promise((r) => setTimeout(r, 1500))]);

  const photo = document.querySelector(".p-mv__img");
  const enLines = document.querySelectorAll(".p-mv__en-line");
  const jaLines = document.querySelectorAll(".p-mv__ja-line, .p-mv__ja-band");
  const header = document.querySelector(".l-header");
  const textIn = { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, ease: "power2.out" };

  gsap
    .timeline({
      onComplete: () => {
        // 終わったら準備クラスと GSAP の指定を外し、CSS の通常表示に戻す
        root.classList.remove("is-opening");
        gsap.set([photo, ...enLines, ...jaLines, header], { clearProps: "all" });
      },
    })
    .fromTo(photo, { opacity: 0, filter: "blur(12px)", scale: 1.06 }, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.4, ease: "power1.out" })
    .fromTo(enLines, { opacity: 0, filter: "blur(6px)", y: 12 }, { ...textIn, stagger: 0.15 }, 0.6) // 写真が出はじめて 0.6 秒後から、英字を 1 行ずつ
    .fromTo(jaLines, { opacity: 0, filter: "blur(6px)", y: 12 }, textIn, 0.9) // 英字の 0.3 秒後に、日本語と緑帯を一緒に
    .fromTo(header, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" }, "<");
}

// ========================================
// Modal（プライバシーポリシー）
// ========================================
function initModal() {
  const triggers = document.querySelectorAll(".js-modal-open");
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.modal);
      if (dialog && !dialog.open) dialog.showModal();
    });
  });

  document.querySelectorAll(".js-modal").forEach((dialog) => {
    dialog.querySelectorAll(".js-modal-close").forEach((button) => {
      button.addEventListener("click", () => dialog.close());
    });
    // 背景（ダイアログの外）のクリックで閉じる
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isOutside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
      if (isOutside) dialog.close();
    });
  });
}

// ========================================
// Contact Form（入力チェックのみ。練習用のため送信しない）
// ========================================
function initContactForm() {
  const form = document.querySelector(".js-contact-form");
  if (!form) return;

  const agree = form.querySelector(".js-agree");
  const submit = form.querySelector(".js-submit");
  const notice = form.querySelector(".js-form-notice");
  const fields = form.querySelectorAll(".js-form-field");

  const messages = {
    name: "お名前を入力してください。",
    email: "メールアドレスを入力してください。",
    emailFormat: "メールアドレスの形式で入力してください。",
    tel: "電話番号は数字とハイフンで入力してください。",
    message: "お問い合わせ内容を入力してください。",
    agree: "プライバシーポリシーへの同意が必要です。",
  };

  const setError = (field, text) => {
    const error = form.querySelector(`#${field.id}-error`);
    field.classList.toggle("is-error", text !== "");
    field.setAttribute("aria-invalid", String(text !== ""));
    if (error) error.textContent = text;
  };

  const validateField = (field) => {
    const value = field.value.trim();
    if (field.required && value === "") {
      setError(field, messages[field.name]);
      return false;
    }
    if (field.type === "email" && value !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(field, messages.emailFormat);
      return false;
    }
    if (field.type === "tel" && value !== "" && !/^[0-9-]+$/.test(value)) {
      setError(field, messages.tel);
      return false;
    }
    setError(field, "");
    return true;
  };

  // 同意するまで送信ボタンを押せない
  agree.addEventListener("change", () => {
    submit.disabled = !agree.checked;
    if (agree.checked) setError(agree, "");
  });

  fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    fields.forEach((field) => {
      if (!validateField(field)) isValid = false;
    });
    if (!agree.checked) {
      setError(agree, messages.agree);
      isValid = false;
    }
    notice.textContent = isValid ? "入力内容を確認しました。（練習用のため送信はしていません）" : "";
    if (!isValid) form.querySelector(".is-error")?.focus();
  });
}

// ========================================
// Parallax（写真の帯。スクロールより遅く動かす）
// ========================================
function initParallax() {
  const bands = document.querySelectorAll(".js-parallax");
  if (!bands.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const RANGE = 0.2; // 帯の高さに対する移動量（CSS の top: -20% / height: 140% と対応）
  let ticking = false;

  const update = () => {
    ticking = false;
    if (reduceMotion.matches) return;
    const viewport = window.innerHeight;
    bands.forEach((band) => {
      const rect = band.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewport) return; // 画面外は計算しない
      // 帯が画面下端に入った時 0、上端から出た時 1
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const offset = (progress - 0.5) * 2 * RANGE * rect.height;
      band.querySelector(".js-parallax-img")?.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
    });
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reduceMotion.addEventListener("change", requestUpdate);
  update();
}
