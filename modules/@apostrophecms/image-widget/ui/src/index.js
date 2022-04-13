export default () => {
  apos.util.widgetPlayers['@apostrophe/image'] = {
    selector: '[data-image-widget]',
    player: function(el) {
      // Add player code
      var height = el.dataset.widgetHeight;
      if(height) {
        el.style.height = height;
      }
    }
  };
};