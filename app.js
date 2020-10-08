console.log('linking app.js to index.html')
let props = [
  {
    reservation: '001',
    name: 'Steven',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Confirmado', //map
  },
  {
    reservation: '002',
    name: 'Victor',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '003',
    name: 'Brandon',
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '004',
    name: 'Carlos',
    lastName: 'Doe',
    ETA: '15:00 hrs',
    status: 'Cancelado', //map
  },
  {
    reservation: '005',
    name: 'David',
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
const filtering = () => {
  let paragraph = document.querySelector("#paragraph")
  const newArray = props.filter((el) => {
    if (el.name === 'John') {
      return paragraph.innerHTML = el.name
    }
  })
}
