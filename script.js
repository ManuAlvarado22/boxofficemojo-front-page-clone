const links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {
    e.preventDefault();
  });
}
