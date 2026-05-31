function exportToCalendar(){

let events = ""

const startInput = document.getElementById("calendarStartDate").value

if(!startInput){
  alert("Please choose the Thursday start date first.")
  return
}

const startDate = new Date(startInput + "T00:00:00")

const allDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const startIndex = allDays.indexOf(plannerSettings.weekStartDay);
const dayOrder = allDays.slice(startIndex).concat(allDays.slice(0, startIndex));

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

  const offset = dayOrder.indexOf(d.day)
  const eventDate = new Date(startDate)
  eventDate.setDate(startDate.getDate() + offset)

  eventDate.setHours(plannerSettings.calendarHour || 18,0,0)

  const endDate = new Date(eventDate)
  endDate.setTime(
    eventDate.getTime() +
    ((plannerSettings.calendarDurationHours || 1) * 60 * 60 * 1000)
  )

  const start = formatICSDate(eventDate)
  const end = formatICSDate(endDate)

  events += `
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${start}
DTEND:${end}
END:VEVENT
`
})

const calendar = `BEGIN:VCALENDAR
VERSION:2.0
${events}
END:VCALENDAR`

const blob = new Blob([calendar], { type: "text/calendar" })
const url = URL.createObjectURL(blob)

const a = document.createElement("a")
a.href = url
a.download = "meal-plan.ics"
a.click()

hideCalendarPanel();

URL.revokeObjectURL(url)

}

function getNextThursday(){

const today = new Date()
const day = today.getDay()

const THURSDAY = 4

let diff = THURSDAY - day

if(diff <= 0){
  diff += 7
}

const nextThursday = new Date(today)
nextThursday.setDate(today.getDate() + diff)
nextThursday.setHours(0,0,0,0)

return nextThursday
}

function formatICSDate(date){
return date.toISOString().replace(/[-:]/g,"").split(".")[0] + "Z"
}
