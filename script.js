import {format, getUnixTime, fromUnixTime } from 'date-fns'


const datePickerBtn = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const prevMonthButton = documet.querySelector('.prev-month-button')
const nextMonthButton = document.querySelector('.next-month-button')

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
   datePickerHeaderText.innerText = format(selectedDate, 'MMMM - yyyy')
   setUpMonthButtons(selectedDate)
}

function setUpMonthButtons(selectedDate){
    nextMonthButton.addEventListener('click', () => {
        setupDatePicker(selectedDate )
    })
}


setDate(new Date())