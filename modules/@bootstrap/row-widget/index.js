const rowOptions = require('./lib/rowOptions');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Fila',
  },
  fields: {
    add: {
      numColumns: {
        type: "select",
        label: "Selecciona cuantas columnas",
        help: "Especifica cuantas columnas quieres que tenga la fila",
        choices: rowOptions.numColumns,
        required: true,
        def: '4'
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
        help: "Agrega una columna. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
        if: {
          $or: [
            {numColumns:  '1'},
            {numColumns:  '2'},
            {numColumns:  '3'},
            {numColumns:  '4'},
            {numColumns:  '5'},
          ]
        }
      },
      column2: {
        type: 'area',
        label: 'Columna dos',
        help: "Agrega una columna. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
        if: {
          $or: [
            {numColumns:  '2'},
            {numColumns:  '3'},
            {numColumns:  '4'},
            {numColumns:  '5'},
          ]
        }
      },
      column3: {
        type: 'area',
        label: 'Columna tres',
        help: "Agrega una columna. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
        if: {
          $or: [
            {numColumns:  '3'},
            {numColumns:  '4'},
            {numColumns:  '5'},
          ]
        }
      },
      column4: {
        type: 'area',
        label: 'Columna cuatro',
        help: "Agrega una columna. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
        if: {
          $or: [
            {numColumns:  '4'},
            {numColumns:  '5'}
          ]
        }
      },
      column5: {
        type: 'area',
        label: 'Columna cinco',
        help: "Agrega una columna. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/column': {}
          }
        },
        contextual: true,
        if: {
          $or: [
            {numColumns:  '5'}
          ]
        }
      },
    }
  }
};