module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Column Widget',
  },
  fields: {
    add: {
      column: {
        type: 'area',
        label: 'Columna',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      },
    }
  }
};