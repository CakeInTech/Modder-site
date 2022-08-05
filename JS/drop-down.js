newFunction();
function newFunction() {
  $(document).ready(function () {
    $("#mobile-icon").click(function () {
      $("#phone-nav").stop().slideToggle();
    });
  });
}

