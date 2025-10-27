export function initTheme(root, themeToggleButton) {
  try {
    const savedTheme = localStorage.getItem("theme") || "dark";
    root.dataset.theme = savedTheme;
  } catch (e) {
    root.dataset.theme = "dark";
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = newTheme;
      try {
        localStorage.setItem("theme", newTheme);
      } catch (e) {}
    });
  }
}
