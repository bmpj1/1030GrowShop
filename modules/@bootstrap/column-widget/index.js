const areas = require('../../@macros/helper/lib/areas');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columna',
  },
  fields: {
    add: {
      column: {
        type: 'area',
        label: 'Columna',
        help: 'Selecciona una herramienta para agregarla a esta columna',
        options: areas.mainWidgets
      },
    }
  }
};