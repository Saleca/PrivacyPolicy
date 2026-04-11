function resizePage() {
  var resizable = document.getElementById("resizable");
  var footer = document.getElementById("footer");
  resizable.style.minHeight = "";

  var minHeight = window.innerHeight - footer.offsetHeight;

  //check why size is not working
  if (minHeight >= resizable.offsetHeight-10) {
    console.log("resizing");
    resizable.style.minHeight = (minHeight + 1).toString() + "px";
    scrollToTop();
  }
}

function scrollToTop() {
  var header = document.getElementById("header");
  header.scrollIntoView({ behavior: 'instant', block: 'start' });
}

window.dispatchEvent(new Event(loadingEvents.FOOTER_SCRIPT));
window.addEventListener("resize", (e) => resizePage());