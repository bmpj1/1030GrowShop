module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        lable: 'Area de contenido',
        help: "Agrega contenedores de widgets. Puedes guardar sin agregar contenido y hacerlo contextualmente desde fuera.",
        options: {
          widgets: {
            '@bootstrap/main-container': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
