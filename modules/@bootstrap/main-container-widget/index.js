const areas = require('../../@macros/helper/lib/areas');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Main container',
  },
  fields: {
    add: {
      container: {
        type: 'select',
        label: 'Selecciona un tipo de contenedor',
        choices: [
          {
            label: 'Container',
            value: 'container'
          },
          {
            label: 'Container Fluid',
            value: 'container-fluid'
          }
        ],
        def: 'container',
        required: true
      },
      marginTop: {
        type: "select",
        label: "Margin top",
        choices: areas.choicesMarginTop,
        required: true
      },
      marginBottom: {
        type: "select",
        label: "Margin bottom",
        choices: areas.choicesMarginBottom,
        required: true
      },
      marginRight: {
        type: "select",
        label: "Margin right",
        choices: areas.choicesMarginRight,
        required: true
      },
      marginLeft: {
        type: "select",
        label: "Margin left",
        choices: areas.choicesMarginLeft,
        required: true
      },
      paddingBottom: {
        type: "select",
        label: "Padding bottom",
        choices: areas.choicesPaddingBottom,
        required: true
      },
      paddingTop: {
        type: "select",
        label: "Padding top",
        choices: areas.choicesPaddingTop,
        required: true
      },
      paddingLeft: {
        type: "select",
        label: "Padding left",
        choices: areas.choicesPaddingLeft,
        required: true
      },
      paddingRight: {
        type: "select",
        label: "Padding right",
        choices: areas.choicesPaddingRight,
        required: true
      },
      row: {
        label: "Fila",
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
      margin: {
        label: 'Margenes',
        fields: [ 'marginTop', 'marginLeft', 'marginRight', 'marginBottom']
      },
      padding: {
        label: 'Relleno',
        fields: [ 'paddingTop', 'paddingLeft', 'paddingRight', 'paddingBottom']
      }
    }
  }
};