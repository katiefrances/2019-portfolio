let offset = 56;

$(".navbar li a").click(function(event) {
  event.preventDefault();
  $($(this).attr("href"))[0].scrollIntoView();
  scrollBy(0, -offset);
});

// let hideShow = () => {
//   let show = document.getElementById("nav-link a");
//   if (show.style.display === "none") {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// };
