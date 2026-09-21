(() => {
  const itemOf = (el) => el && el.closest && el.closest(".bp-nav-item");

  document.addEventListener("mouseover", (e) => {
    const item = itemOf(e.target);
    if (!item || !item.closest(".bp-header")) return;
    document.querySelectorAll(".bp-nav-item.is-open").forEach((other) => {
      if (other !== item) other.classList.remove("is-open");
    });
    if (item.querySelector(".bp-drop")) item.classList.add("is-open");
  });

  document.addEventListener("mouseout", (e) => {
    const item = itemOf(e.target);
    if (!item) return;
    const next = e.relatedTarget;
    if (next && item.contains(next)) return;
    item.classList.remove("is-open");
  });

  document.addEventListener("click", (e) => {
    const localeLink = e.target.closest("[data-locale] a");
    if (localeLink && localeLink.closest(".bp-header")) {
      e.preventDefault();
      document.querySelectorAll(".bp-header [data-locale]").forEach((dd) => dd.classList.remove("is-current"));
      const dd = localeLink.closest("[data-locale]");
      if (dd) dd.classList.add("is-current");
      document.querySelectorAll(".bp-nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
      return;
    }

    const handle = e.target.closest(".bp-nav-handle");
    if (handle && handle.tagName === "BUTTON" && handle.closest(".bp-header")) {
      e.preventDefault();
      const item = itemOf(handle);
      const willOpen = item && !item.classList.contains("is-open");
      document.querySelectorAll(".bp-nav-item.is-open").forEach((other) => other.classList.remove("is-open"));
      if (willOpen) item.classList.add("is-open");
      return;
    }

    if (!e.target.closest(".bp-header")) {
      document.querySelectorAll(".bp-nav-item.is-open").forEach((item) => item.classList.remove("is-open"));
    }
  });

  const prepLoopVideos = () => {
    const videos = document.querySelectorAll(".bp-loop-video");
    if (!videos.length) return false;
    videos.forEach((v) => {
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.volume = 0;
      if (v.paused) v.play().catch(() => {});
    });
    return true;
  };
  let tries = 0;
  const timer = setInterval(() => {
    tries += 1;
    if (prepLoopVideos() || tries > 20) clearInterval(timer);
  }, 100);
})();
