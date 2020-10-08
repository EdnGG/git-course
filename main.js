// Variables que hacen referencia a nodos del DOM
const $img = document.querySelector('img')
const $body = document.querySelector('body')
const $main = $body.querySelector('main')
const $inputItem = $body.querySelector('#item-input')
const $inputButton = $body.querySelector('button')

const $list = document.createElement('ul')

console.log($list)

$main.appendChild($list)
$body.removeChild($img)
$list.innerHTML = ''

function getInputItem() {
  let value = $inputItem.value
  if (!value) return

  const $li = document.createElement('li')

  const text = document.createTextNode(value)

  $li.appendChild(text)

  const $deleteButton = document.createElement('button')
  $deleteButton.innerText = 'Delete'
  const $doneButton = document.createElement('button')
  $doneButton.innerText = 'Done'

  $deleteButton.onclick = () => {
    $list.removeChild($li)
  }

  $doneButton.onclick = () => {
    if ($li.className) {
      $li.className = ''
    } else {
      $li.className = 'done'
      $li.className += 'done'

      console.log([...$li.classList].includes('done'))
    }
  }

  $li.appendChild($deleteButton)
  $li.appendChild($doneButton)

  $list.appendChild($li)
  $inputItem.value = ''
}

$inputButton.onclick = getInputItem
