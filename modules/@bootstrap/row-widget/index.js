const rowOptions = require('./lib/rowOptions');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Row Widget',
  },
  fields: {
    add: {
      numColumns: {
        label: 'Selecciona cuantas columnas',
        type: "select",
        choices: rowOptions.numColumns,
        required: true
      },
      verticalAlign: {
        label: 'Alinear objetos verticalmente.',
        type: "select",
        choices: rowOptions.verticalAlign,
        required: true
      },
      horizontalAlign: {
        label: 'Alinear objetos horizontalmente.',
        type: "select",
        choices: rowOptions.horizontalAlign,
        required: true
      },
      column1: {
        type: 'area',
        label: 'Columna uno',
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
      },
      column2: {
        type: 'area',
        label: 'Columna dos',
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
      },
      column3: {
        type: 'area',
        label: 'Columna tres',
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
      },
      column4: {
        type: 'area',
        label: 'Columna cuatro',
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
      },
      column5: {
        type: 'area',
        label: 'Columna cinco',
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
      },
    }
  }
};