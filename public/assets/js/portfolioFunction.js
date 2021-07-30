document.addEventListener('DOMContentLoaded', function() {
  var carouselements = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(carouselements);
  instances.forEach(instance => {
    setInterval(function() {
      instance.next();
    }, 5000);
  });
});