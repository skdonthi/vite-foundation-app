import '../../../node_modules/foundation-sites/scss/foundation.scss';
import '../../../node_modules/foundation-sites/scss/_global.scss';
import '../scss/main.scss';
$(document).foundation();


const allTilesOnPage = document.querySelectorAll(".selectable");

function toggleSelectClass(event) {
  event.currentTarget.classList.toggle("selected");
}


allTilesOnPage.forEach(function (tile) {
  tile.addEventListener("click", toggleSelectClass)
});



// Wifi video modal
var modal = document.getElementById("wifi-video-modal");
var btn = document.getElementById("wifi-video-launch");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};






