let audio1 = new Audio('beep.mp3')
let audio2 = new Audio('alarm-clock-beep.wav')
let audio3 = new Audio('extreme_clock_alarm.mp3')
var timer = setInterval(show, 1000)
function show() {
    // document.getElementById("play").style.display = "block"
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    hr = checkTime(hr)
    min = checkTime(min)
    sec = checkTime(sec)
    secs.innerHTML = sec
    hour.innerHTML = `${hr} ${min}`
    calender.innerHTML = date.toDateString()
}
function checkTime(i) {
    if (i<10) {
        i = "0" +  i
    }
    return i
}

function clock(){
    window.location.href = 'clock.html'
}
function alarm (){
    window.location.href = 'alarm.html'
}
function time() {
    window.location.href = 'timer.html'
}
function stopwatch() {
    window.location.href = 'stopwatch.html'
}


function play(){
    document.getElementById("pause").style.display = "block"
    document.getElementById("play").style.display = "none"
    let timerhr = hh.value
    let timermin = mm.value
    let timersec = ss.value
    let myHour = timerhr
    let myMinutes = timermin
    let mySeconds = timersec
   if (timersec == "" || timerhr == "" || timermin == "") {
       alert("Edit Timer! \nFill all fields")
       window.location.reload()
   } else if (timersec != 0) {
        mySeconds--
        ss.value = mySeconds
        document.getElementById("container").style.display = "none"
        showtimer.innerHTML = `${hh.value}:${mm.value}:${mySeconds}`
        myTime = setTimeout(play, 1000)
        audio2.play()
    } else if (timermin>0 && timersec == 0) {
        myMinutes--
        ss.value = 60
        mm.value = myMinutes
        document.getElementById("container").style.display = "none"
        showtimer.innerHTML = `${hh.value}:${mm.value}:${mySeconds}`
        myTime =  setTimeout(play, 1000)
        audio2.play()
    } else if (timerhr>0 && timermin == 0) {
        myHour--
        mm.value = 60
        hh.value = myHour
        document.getElementById("container").style.display = "none"
        showtimer.innerHTML = `${myHour}:${myMinutes}:${mySeconds}`
        myTime = setTimeout(play, 1000)
        audio2.play()
    } else if (timersec == 0) {
        alert("Timer Done!")
        window.location.reload()
    }  if (hh.value == "" || mm.value == "" && ss.value<10) {
        document.getElementById("container").style.display = "none"
        showtimer.innerHTML = `00:00:0${mySeconds}`
        audio2.play()
        }  
        if (mySeconds>10 || myHour<10 || myMinutes>10) {
            document.getElementById("container").style.display = "none"
            showtimer.innerHTML = `0${myHour}:${myMinutes}:${mySeconds}`
            audio2.play()
        }  if (mySeconds>=10 && myMinutes<10 && myHour<10) {
            document.getElementById("container").style.display = "none"
            showtimer.innerHTML = `0${myHour}:0${myMinutes}:${mySeconds}`
            audio2.play()
        } if (myMinutes>=10 && myHour<10 && mySeconds<10) {
            document.getElementById("container").style.display = "none"
            showtimer.innerHTML = `0${myHour}:${myMinutes}:0${mySeconds}`
            audio2.play()
        } 
        if (myHour>=10 && myMinutes>=10 && mySeconds<10) {
            document.getElementById("container").style.display = "none"
            showtimer.innerHTML = `${myHour}:${myMinutes}:0${mySeconds}`
            audio2.play()
        } 
        if (ss.value>60 || hh.value>24 || mm.value>60) {
            alert("Enter valid time!")
            window.location.reload()
        }
         else if (timerhr.length == 3 || timermin.length == 3 || timersec.length == 3) {
            alert("Invalid Input")
            window.location.reload()
        } else if (ss.value == 0 && hh.value == 0 && mm.value == 0) {
            audio2.pause()
            audio1.play()
            
        }
}
const pause = () =>{
    clearTimeout(myTime)
    document.getElementById("play").style.display = "block"
    document.getElementById("pause").style.display = "none"
    audio2.pause()
}


function playStopWatch() {
        document.getElementById("play").style.display = 'none'
        document.getElementById("pause").style.display = 'block'
        document.getElementById("refresh").style.display = 'block'
        audio2.play()
      myWatch = setTimeout(playStopWatch, 1000)
        
        if (stopWatchsec!=1) {
            myStopWatchsec++
            stopWatchsec.value =  myStopWatchsec
        }  if (stopWatchsec.value==59) {
            stopWatchsec.value=0
            stopWatchmin.value=0
            myStopWatchmin++
            stopWatchmin.value =  myStopWatchmin
        } if (stopWatchmin.value==59) {
            stopWatchmin.value=0
            stopWatchsec.value=0
            myStopWatchhr++
            stopWatchhr.value = myStopWatchhr
            audio1.play()
        }  else if (myStopWatchsec<10) {
            stopWatchsec.value =  `0`+myStopWatchsec
        } else if (myStopWatchmin<10 && stopWatchsec.value<10) {
            stopWatchmin.value = `0`+myStopWatchmin
        }    
}

function pauseStopWatch() {
        document.getElementById("play").style.display = 'block'
        document.getElementById("pause").style.display = 'none'
    clearTimeout(myWatch)
    audio2.pause()
}

show()
function setAlarm(){
    setTimeout(setAlarm, 1000)
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let secs = date.getSeconds()
    document.getElementById("snooze").style.display = "block"
    document.getElementById("stop").style.display ="block"
    document.getElementById("items").style.display = "block"
    document.getElementById("set").style.display = "none"
    document.getElementById("alarm").style.display = "none"
    el.innerHTML = `Alarm set at ${alarmhr.value}:${alarmmin.value}`    
    document.getElementById("larma").style.display = "block"
    if (Number(alarmhr.value)==hr && Number(alarmmin.value)==min) {
        setInterval(show, 1000)
        audio3.play()
    } else if (alarmhr.value=="" || alarmmin.value=="") {
        alert("Edit Alarm")
        document.getElementById("larma").style.display = "none"
       document.getElementById("set").style.display = "block"
       document.getElementById("snooze").style.display = "none"
        document.getElementById("stop").style.display ="none"
        document.getElementById("items").style.display = "none"
        window.location.reload() 
    }
   if (Number(alarmhr.value)>23 || Number(alarmmin.value)>59 || Number(alarmhr.value)<0 || Number(alarmmin.value)<0) {
       el.innerHTML = `<p style="color: red;">Invalid Time</p>`
       document.getElementById("larma").style.display = "none"
       document.getElementById("set").style.display = "block"
       document.getElementById("snooze").style.display = "none"
        document.getElementById("stop").style.display ="none"
        document.getElementById("items").style.display = "none"
   } else if (Number(alarmmin.value)<10) {
    document.getElementById("snooze").style.display = "block"
    document.getElementById("stop").style.display ="block"
    document.getElementById("items").style.display = "block"
    document.getElementById("set").style.display = "none"
    document.getElementById("alarm").style.display = "none"
    el.innerHTML = `Alarm set at ${alarmhr.value}:0${alarmmin.value}`    
    document.getElementById("larma").style.display = "block"
   }
}

setAlarm()
function snoozeAlarm (){
    document.getElementById("el").style.display = "none"
    demo.innerHTML = `Alarm snoozed for ${items.value} minutes`
    document.getElementById("alarm").style.display = "none"
    document.getElementById("larma").style.display = "block"
    audio3.pause();
    if (items.value == "") {
        alert("Select snooze time")
        demo.innerHTML = ` `

    } else if (items.value = "2") {
        alarmmin.value = Number(alarmmin.value) + 2;    
    } else if (items.value = "5") {
        alarmmin.value = Number(alarmmin.value) + 5;
    } else if (items.value = "10") {
        alarmmin.value = Number(alarmmin.value) + 10;
    } else if (items.value = "15") {
        alarmmin.value = Number(alarmmin.value) + 15;
    } else if (items.value = "0") {
        demo.innerHTML = `<p style="color:red">Disabled</p>`
        window.location.reload()
    } 
  }


function stopAlarm(){
    var myAlarm =  setTimeout(setAlarm, 1000)
    if (prompt("What's the capital of Nigeria?")!=="Abuja") {
        alert("Error")
    } else{
        audio3.pause()
        window.location.reload()
    }
   
}

      
    
    
    

