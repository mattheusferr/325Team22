document.addEventListener("DOMContentLoaded", function() {
    var finalizeButton = document.querySelector(".button");
    var rightBox = document.querySelector(".right-box");

    finalizeButton.addEventListener("click", function() {
        rightBox.classList.toggle("show-right-box");
    });
});
