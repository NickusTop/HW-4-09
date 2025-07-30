const inputName = document.querySelector('.input-name')
const inputSurName = document.querySelector('.input-surname')
const inputEmail = document.querySelector('.input-email')
const inputNumber = document.querySelector('.input-number')
const inputPassword = document.querySelector('.input-password')
const buttonSave = document.querySelector('.button-save')

buttonSave.addEventListener('click', buttonSaveData)

const SAVE_DATA = "saveData"

const saveData = {}

function buttonSaveData() {
    const inputNameValue = inputName.value.trim()
    const inputSurNameValue = inputSurName.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputNumberValue = inputNumber.value.trim()
    const inputPasswordValue = inputPassword.value.trim()

    const isNameValid = inputNameValue.length >= 4 && inputNameValue.length <= 15
    const isSurnameValid = inputSurNameValue.length >= 4 && inputSurNameValue.length <= 15
    const isEmailValid = inputEmailValue.includes("@")
    const isPasswordValid = inputPasswordValue.length >= 6
    const isNumberValid = /^[0-9]{10,15}$/.test(inputNumberValue)

    if (isNameValid && isSurnameValid && isEmailValid && isNumberValid && isPasswordValid) {

    const saveData = {
        name: inputNameValue,
        surname: inputSurNameValue,
        email: inputEmailValue,
        number: inputNumberValue,
        password: inputPasswordValue
    }
    
    localStorage.setItem(SAVE_DATA, JSON.stringify(saveData))
    } else {
        alert("Будь ласка введіть правильні дані!")
    }
}
function renderSaveData() {
    const rawData = localStorage.getItem(SAVE_DATA)

    if (!rawData) return

    const saveData = JSON.parse(rawData)

    if (saveData.name) inputName.value = saveData.name
    if (saveData.surname) inputSurName.value = saveData.surname
    if (saveData.email) inputEmail.value = saveData.email
    if (saveData.number) inputNumber.value = saveData.number
    if (saveData.password) inputPassword.value = saveData.password
}
renderSaveData()