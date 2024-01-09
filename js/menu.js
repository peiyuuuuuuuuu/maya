function init() {
  const menuBtn = document.querySelector(".menu-btn");
  const phoneMenu = document.querySelector(".phone-menu");
  menuBtn.addEventListener("click", function(e) {
    // menuBtn.classList.toggle("active");
    // phoneMenu.classList.toggle("is-show");
    if (menuBtn.classList.contains("active")) {
      // 布林值 boolean true
      // 如果menuBtn的class中包含active
      menuBtn.classList.remove("active");
    } else {
      // false
      // 如果menuBtn的class中不包含active
      menuBtn.classList.add("active");
    }

    if(phoneMenu.classList.contains("is-show")){
      phoneMenu.classList.remove("is-show");
    } else{
      phoneMenu.classList.add("is-show");
    }
  })
}

document.addEventListener("DOMContentLoaded", init);
