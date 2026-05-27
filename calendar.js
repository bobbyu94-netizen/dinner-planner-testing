function exportToCalendar(){

let events = ""

const startInput = document.getElementById("calendarStartDate").value

if(!startInput){
  alert("Please choose the Thursday start date first.")
  return
}

const startDate = new Date(startInput + "T00:00:00")

const dayOrder = ["Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday"]

currentPlan.forEach(d => {

  let title = ""

  if(d.dateNight){
    title = "❤️ Date Night"
  }
  else if(d.takeout){
    title = "Takeout: " + d.takeout
  }
  else{
    title = d.meal
    if(d.side){
      title += " + " + d.side
    }
  }

  function getNextThursday(){

const today = new Date()
const day = today.getDay() // 0 = Sunday

const THURSDAY = 4

let diff = THURSDAY - day

if(diff <= 0){
  diff += 7
}                  
