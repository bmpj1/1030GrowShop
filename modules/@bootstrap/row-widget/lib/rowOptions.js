let numColumns = [
  {
    label: 'default',
    value: '4',
  },
  {
    label: 'Una columna',
    value: '1'
  },
  {
    label: 'Dos columnas',
    value: '2'
  },
  {
    label: 'Tres columnas',
    value: '3'
  },
  {
    label: 'Cuatro columnas',
    value: '4'
  },
  {
    label: 'Cinco columnas',
    value: '5'
  }
]

let verticalAlign = [
  {
    label: 'Default',
    value: ''
  },
  {
    label: 'Arriba',
    value: 'align-items-start',
  },
  {
    label: 'Centro',
    value: 'align-items-center'
  },
  {
    label: 'Abajo',
    value: 'align-items-end'
  }
];

let horizontalAlign = [
  {
    label: 'Default',
    value: ''
  },
  {
    label: 'Izquierda',
    value: 'justify-content-start',
  },
  {
    label: 'Centro',
    value: 'justify-content-center'
  },
  {
    label: 'Derecha',
    value: 'justify-content-end'
  }
];

module.exports = {
  numColumns: numColumns,
  verticalAlign: verticalAlign,
  horizontalAlign: horizontalAlign
};
