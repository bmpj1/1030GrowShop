module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'product Page',
    pluralLabel: 'product Pages',
    pieceModuleName: 'product',
    perPage: 12
  },
  fields: {
    add: {
      subtitle: {
        type: 'string'
      },
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      basics: {
        fields: ['title', 'subtitle', 'main']
      }
    }
  }
};