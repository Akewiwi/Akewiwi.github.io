document.addEventListener("DOMContentLoaded", function() {
  var divsClickeables = document.querySelectorAll(".perfilClick");

  divsClickeables.forEach(function(div) {
    div.addEventListener("click", function() {
      var url = div.getAttribute("data-url");

      window.location.href = url;
    });
  });
});