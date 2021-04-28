window.addEventListener("scroll", function (e) {
  var header = document.querySelector(".header-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 16.061055, lng: 108.228541 },
  });

  const beachMarker = new google.maps.Marker({
    position: { lat: 16.061055, lng: 108.228541 },
    map,
    icon: {
      url: "vietnam.png",
    },
  });
}
$('.referenct-to-show').slick();

