const areas = require('../../@macros/helper/lib/areas');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contenedor principal',
  },
  fields: {
    add: {
      container: {
        type: 'select',
        label: 'Selecciona un tipo de contenedor',
        help: 'Container fluid ocupa más ancho que el container.',
        choices: [
          {
            label: 'Container Fluid',
            value: 'container-fluid'
          },
          {
            label: 'Container',
            value: 'container'
          }
        ],
        def: 'container-fluid',
        required: true,
      },
      marginTop: {
        type: "select",
        label: "Margen superior",
        help: "Margen superior del contenedor",
        choices: areas.choicesMarginTop,
        required: true
      },
      marginBottom: {
        type: "select",
        label: "Margen inferior",
        help: "Margen inferior del contenedor",
        choices: areas.choicesMarginBottom,
        required: true
      },
      marginLeft: {
        type: "select",
        label: "Margen izquierdo",
        help: "Margen izquierdo del contenedor",
        choices: areas.choicesMarginLeft,
        required: true
      },
      marginRight: {
        type: "select",
        label: "Margen derecho",
        help: "Margen derecho del contenedor",
        choices: areas.choicesMarginRight,
        required: true
      },
      paddingTop: {
        type: "select",
        label: "Relleno superior",
        help: "Relleno superior del contenedor",
        choices: areas.choicesPaddingTop,
        required: true
      },
      paddingBottom: {
        type: "select",
        label: "Relleno inferior",
        help: "Relleno inferior del contenedor",
        choices: areas.choicesPaddingBottom,
        required: true
      },
      paddingLeft: {
        type: "select",
        label: "Relleno izquierdo",
        help: "Relleno izquierdo del contenedor",
        choices: areas.choicesPaddingLeft,
        required: true
      },
      paddingRight: {
        type: "select",
        label: "Relleno derecho",
        help: "Relleno derecho del contenedor",
        choices: areas.choicesPaddingRight,
        required: true
      },
      row: {
        label: "Fila",
        help: "Agrega filas al contenedor. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        type: "area",
        options: {
          widgets: {
            '@bootstrap/row': {},
          }
        },
        contextual: true,
      },
    },
    group: {
      basics: {
        label: 'Basicos',
        fields: [ 'container']
      },
      margins: {
        label: 'Margenes',
        fields: [ 'marginTop', 'marginLeft', 'marginRight', 'marginBottom']
      },
      padding: {
        label: 'Relleno',
        fields: [ 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom', 'row']
      }
    }
  }
};