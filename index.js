var offset = 55.5;

$(".navbar li a").click(function(event) {
  event.preventDefault();
  $($(this).attr("href"))[0].scrollIntoView();
  scrollBy(0, -offset);
});
