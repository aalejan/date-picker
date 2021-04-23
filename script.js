import {format, getUnixTime, fromUnixTime, addMonths, subMonths, startOfWeek, startOfMonth, endOfWeek, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'


const datePickerBtn = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const prevMonthButton = document.querySelector('.prev-month-button')
const nextMonthButton = document.querySelector('.next-month-button')
const dateGrid = document.querySelector('.date-picker-grid-dates')
let currentDate = new Date()

datePickerBtn.addEventListener('click', e => {
    datePicker.classList.toggle('show')
   const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate)
   currentDate = selectedDate
   setupDatePicker(selectedDate)
})

function setDate(date) {
    datePickerBtn.innerText = format(date, 'MMMM do, yyyy')
    datePickerBtn.dataset.selectedDate = getUnixTime(date)
}

function setupDatePicker(selectedDate){
   datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
   setupDates(selectedDate)
}

function setupDates(selectedDate){
    const firstWeekStart = startOfWeek(startOfMonth(currentDate))
    const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
    const dates = eachDayOfInterval({start: firstWeekStart, end: lastWeekEnd})
    dateGrid.innerHTML = ''

    dates.forEach(date => {
        const dateElement = document.createElement('button')
        dateElement.classList.add('date')
        dateElement.innerText = date.getDate()
        if(!isSameMonth(date, currentDate)){
            dateElement.classList.add('date-picker-other-month-date')
        }
        if(isSameDay(date, selectedDate)){
            dateElement.classList.add('selected')
        }
        dateElement.addEventListener('click', ()=> {
            setDate(date)
            datePicker.classList.remove('show')
        })

        dateGrid.appendChild(dateElement)
    })
}


    nextMonthButton.addEventListener('click', () => {
        const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate)
        setupDatePicker(addMonths(currentDate, 1) )
        setupDatePicker(selectedDate)
    })

    prevMonthButton.addEventListener('click', () => {
        const selectedDate = fromUnixTime(datePickerBtn.dataset.selectedDate)
        currentDate = subMonths(currentDate, 1)
        setupDatePicker(selectedDate)
    })



setDate(new Date())