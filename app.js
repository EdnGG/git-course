console.log('Adding some JS')
const props = [
  {
    reservation: '001',
    name: 'John',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Confirmado', //map
  },
  {
    reservation: '002',
    name: 'John',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '003',
    name: 'John',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '004',
    name: 'John',
    lastName: 'Doe',
    ETA: '15:00 hrs',
    status: 'Cancelado', //map
  },
  {
    reservation: '005',
    name: 'John',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Confirmado', //map
  },
  {
    reservation: '006',
    name: 'John',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Cancelado', //map
  },
]

props.map((ele) => return ele.name)
  
