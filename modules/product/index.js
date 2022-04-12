module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Producto',
    pluralLabel: 'Productos'
  },
  fields: {
    add: {
      title: {
        label: 'Nombre de producto',
        type: 'string',
        help: 'Nombre de producto, sólo debe de haber un producto creado con este nomrbe',
        require: true
      },
      price: {
        label: 'Precio',
        type: 'float',
        help: 'Utilizar coma si es necesario. Ejemplo: 12,50',
        min: 0.5,
        require: true
      },
      sku: {
        label: 'ID del producto',
        help: 'ID única para identificar un producto, se genera automaticamente al crear el producto.',
        type: 'string',
        readOnly: true
      },
      stock: {
        label: 'Stock',
        type: 'integer',
        require: true
      },
      details: {
        label: 'Detalles',
        // The `area` field type supports dynamic content widgets. It is
        // covered in the "Areas and widgets" guide section.
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      },
      _images: {
        label: 'Fotos',
        type: 'relationship',
        // Use `@apostrophecms/file` for non-image files
        withType: '@apostrophecms/image',
        help: 'Seleccione la fotos que desea agregar al producto.',
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'price', 'stock', 'sku' ]
      },
      details: {
        label: 'Detalles',
        fields: [ '_images', 'details' ]
      }
    }
  },
  handlers(self, options) {
    return {
      beforeSave: {
        setSku(req, piece) {
          if (!piece.sku) {
            piece.sku = self.apos.util.generateId();
          }
        }
      }
    };
  }
};