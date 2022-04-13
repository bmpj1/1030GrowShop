export default () => {
  apos.util.widgetPlayers['@bootstrap/slider'] = {
    selector: '[data-slider-widget]',
    player: function(el) {
      // Add player code
      var height = el.dataset.widgetHeight;
      
      if(height) {
        var sliderItems = el.querySelectorAll('.carousel-item');
        sliderItems.forEach(function(sliderItem) {
          sliderItem.style.height = height;
        });
      }
      
    }
  };
};