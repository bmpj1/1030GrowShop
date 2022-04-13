const areas = require('../../@macros/helper/lib/areas');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Accordion',
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': areas.richTextWidgets,
          }
        },
        required: true
      },
      openByDefault: {
        label: 'Abierto por defecto?',
        type: 'boolean',  
        def: true
      },
      row: {
        label: "Contenido",
        type: "area",
        options: {
          widgets: {
            '@apostrophecms/rich-text': areas.richTextWidgets,
          }
        },
        required: true
      }
    }
  }
};