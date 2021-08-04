/*Controlling the amount of scroll down to middle-area when "a tag" nav-arrow is clicked upon*/ 
document.getElementById("nav-arrow").addEventListener("click", scrollDown);

function scrollDown() {
    window.scrollBy(0, 650);
  }