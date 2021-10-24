window.onload = function () {
  var content = document.getElementById("contenedor");

  setTimeout(() => {
    content.style.visibility = "hidden";
    content.style.opacity = "0";
  }, 5000);
};
