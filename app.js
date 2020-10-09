console.log('linking app.js to index.html')
let props = [
  {
    reservation: '001',
    name: 'Steven',
    age: 5,
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Confirmado', //map
  },
  {
    reservation: '002',
    name: 'Victor',
    age: 5,
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '003',
    name: 'Brandon',
    age: 10,
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'No Confirmado', //map
  },
  {
    reservation: '004',
    name: 'Carlos',
    age: 60,
    lastName: 'Doe',
    ETA: '15:00 hrs',
    status: 'Cancelado', //map
  },
  {
    reservation: '005',
    name: 'David',
    age: 20,
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Confirmado', //map
  },
  {
    reservation: '006',
    name: 'John',
    age: 30,
    lastName: 'Doe',
    eta: '15:00 hrs',
    status: 'Cancelado', //map
  },
]

// Using filter()

const filtering = () => {
<<<<<<< HEAD
  let paragraph = document.querySelector("#paragraph-filter")
  props.filter((el) => {
=======
  let paragraph = document.querySelector('#paragraph')
  const newArray = props.filter((el) => {
>>>>>>> styles
    if (el.name === 'John') {
      return (paragraph.innerHTML = el.name)
    }
  })
}
<<<<<<< HEAD

// Using Some
const someMethod = () => {
  console.log('I been clicked')
  let divParagraph = document.querySelector("#div-paragraph-some")
  props.some(age => {
    console.log(age)
    age >= 50
    let newAge = age
    console.log(newAge)
    console.log(age.length)

    let message = `
    <p class="paragraph-some">
    True
    </p>
    `
    return divParagraph.innerHTML = message
  })

}
=======
//Clever ;D
>>>>>>> styles
