const datePickerBtn = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')


datePickerBtn.addEventListener('click', e => {
    
    datePicker.classList.toggle('show')
})

function setDate(date) {
    datePickerBtn.innerText = 
}