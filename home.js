function toggleTheme() {
  const [nextTheme, icon] =
    localStorage.getItem("data-theme") === "dark"
      ? ["light", "fa-sun"]
      : ["dark", "fa-moon"];
  applyTheme(nextTheme, icon);
}

function applyTheme(nextTheme = "dark", icon = "fa-moon") {
  document.body.setAttribute("data-theme", nextTheme);
  localStorage.setItem("data-theme", nextTheme);
  document.getElementById("themeBtn").value = nextTheme;
  const Element = document.getElementById("themeBtn").querySelector("i");
  Element.classList.remove("fa-sun", "fa-moon");
  Element.classList.add(icon);
}

document.addEventListener("DOMContentLoaded", () => {
  const [defaultTheme, defaultIcon] =
    localStorage.getItem("data-theme") === "light"
      ? ["light", "fa-sun"]
      : ["dark", "fa-moon"];
  applyTheme(defaultTheme, defaultIcon);
});

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  let upbtn = document.getElementById("up");
  let goToTopVisible = window.scrollY >= 700 ? "visible" : "hidden";
  /*   upbtn.style.visibility = goToTopVisible; */
  if (goToTopVisible === "hidden") {
    upbtn.style.animation = "reversefadeIn 0.7s forwards";
  } else {
    upbtn.style.animation = "fadeIn 0.7s forwards";
  }
});
