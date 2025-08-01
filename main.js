const inputName = document.querySelector('.input-name')
const inputSurName = document.querySelector('.input-surname')
const inputEmail = document.querySelector('.input-email')
const inputNumber = document.querySelector('.input-number')
const inputPassword = document.querySelector('.input-password')
const buttonSave = document.querySelector('.button-save')
const listDiv = document.querySelector('.list-div')
const menuDiv = document.querySelector('.menu-div')
const closeDiv = document.querySelector('.close-div')
const buttonList = document.querySelector('.button-list')   
const buttonClose = document.querySelector('.button-close')

buttonSave.addEventListener('click', buttonSaveData)
buttonList.addEventListener('click', buttonListOpen)
buttonClose.addEventListener('click', buttonListClose)

const SAVE_DATA = "saveData"

const saveData = []

function buttonSaveData() {
    const inputNameValue = inputName.value.trim()
    const inputSurNameValue = inputSurName.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputNumberValue = inputNumber.value.trim()
    const inputPasswordValue = inputPassword.value.trim()

    if (inputNameValue && inputSurNameValue && inputEmailValue && inputNumberValue && inputPasswordValue) {
        const data = {
            name: inputNameValue,
            surname: inputSurNameValue,
            email: inputEmailValue,
            number: inputNumberValue,
            password: inputPasswordValue
        }

        saveData.push(data)
        localStorage.setItem(SAVE_DATA, JSON.stringify(saveData))

        renderSaveData()
        
        inputName.value = ''
        inputSurName.value = ''
        inputEmail.value = ''
        inputNumber.value = ''
        inputPassword.value = ''
    }

    
}
function renderSaveData() {
    listDiv.innerHTML = ''
    const savedData = JSON.parse(localStorage.getItem(SAVE_DATA)) || []

    savedData.forEach((data, index) => {
        const li = document.createElement('li')
        li.className = 'li-list'
        li.innerHTML = `
            <p class="p-save">Name: ${data.name}</p>
            <p class="p-save">Surname: ${data.surname}</p>
            <p class="p-save">Email: ${data.email}</p>
            <p class="p-save">Number: ${data.number}</p>
            <p class="p-save">Password: ${data.password}</p>
        `
        listDiv.appendChild(li)

        const deleteLi = li
        deleteLi.addEventListener('click', function () {
            if (!confirm('Ви точно хочете видалити?')) {
                return
            } else {
                savedData.splice(index, 1)
                localStorage.setItem(SAVE_DATA, JSON.stringify(savedData))
                renderSaveData()
            }
        })
    })
    
}
renderSaveData()

function buttonListOpen() {
    const listDiv = document.querySelector('.list-div')
    const menuDiv = document.querySelector('.menu-div')
    const closeDiv = document.querySelector('.close-div')

    if (listDiv.style.display === "none" || !listDiv.style.display) {
        listDiv.style.display = "flex"
        menuDiv.style.display = "none"
        closeDiv.style.display = "flex"
    } else {
        listDiv.style.display = "none"
        closeDiv.style.display = "none"
    }
}
function buttonListClose() {
    const listDiv = document.querySelector('.list-div')
    const menuDiv = document.querySelector('.menu-div')
    const closeDiv = document.querySelector('.close-div')

    listDiv.style.display = "none"
    menuDiv.style.display = "flex"
    closeDiv.style.display = "none"
}