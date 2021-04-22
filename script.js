import {format, getUnixTime, fromUnixTime } from 'date-fns'


const datePickerBtn = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')


datePickerBtn.addEventListener('click', e => {
    datePicker.classList.toggle('show')
   const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate)
   setupDatePicker(selectedDate)
})

function setDate(date) {
    datePickerBtn.innerText = format(date, 'MMMM do, yyyy')
    datePickerBtn.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate){
    console.log(selectedDate)
}

setDate(new Date())