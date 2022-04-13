const areas = require('../../@macros/helper/lib/areas');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Slider',
  },
  fields: {
    add: {
      height: {
        label: 'Alto del slider',
        help: 'Especifica el alto del slider en píxeles.',
        type: 'select',
        choices: [
          {
            label: '96px',
            value: '96px',
          },
          {
            label: '192px',
            value: '192px',
          },
          {
            label: '240px',
            value: '240px',
          },
          {
            label: '480px',
            value: '480px',
          },
          {
            label: '550px',
            value: '550px',
          }
        ],
        def: '192px',
        required: true,
      },
      slides: {
        label: 'Slides',
        type: 'array',
        help: 'Agregar imagenes al slider.',
        fields: {
          add: {
            image: {
              label: 'Agrega una imagen',
              type: 'area',
              options: {
                widgets: {
                  '@apostrophecms/image': {
                  },
                },
                max: 1
              },
              required: true
            },
            contentStyle: {
              label: 'Estilo del contenido',
              help: 'Escoge un estilo para el contenido',
              type: 'checkboxes',
              choices: [
                {
                  label: 'Con texto',
                  value: 'text'
                },
                {
                  label: 'Con link',
                  value: 'link'
                }
              ]
            },
            imageText: {
              label: 'Texto de la imagen',
              type: 'area',
              options: {
                widgets: {
                  '@apostrophecms/rich-text': areas.richTextWidgets,
                },
                max: 1
              },
              if: {
                contentStyle: 'text'
              },
              required: true
            },
            link: {
              label: 'Escoge un tipo de link',
              type: 'select',
              required: true,
              choices: [
                {
                  value: 'internalLink',
                  label: 'Link a una pagina de esta web'
                },
                {
                  value: 'externalLink',
                  label: 'Link a cualquier sitio'
                }
              ],
              def: 'internalLink',
              if: {
                contentStyle: 'link'
              }
            },
            _page: {
              label: 'Pagina',
              type: 'relationship',
              help: 'Seleccione una pagina para el link.',
              withType: '@apostrophecms/page',
              required: true,
              if: {
                link: 'internalLink',
              },
              max: 1
            },
            url: {
              label: 'URL',
              type: 'url',
              required: true,
              if: {
                link: 'externalLink',
              }
            },
            tabLink: {
              label: 'Escoje donde se abrirá el link',
              type: 'select',
              required: true,
              choices: [
                {
                  value: '_blank',
                  label: 'En una nueva pestaña'
                },
                {
                  value: '_self',
                  label: 'En la misma pestaña'
                },
              ],
              def: '_blank',
              if: {
                $or: [
                  {link: 'internalLink'},
                  {link: 'externalLink'}
                ]
              }
            },
          }
        },
        min: 1
      },
    }
  }
};