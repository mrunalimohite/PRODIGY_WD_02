let ms = 0, s = 0, m = 0, h = 0
let timer

let display = document.getElementById('time')
let laps = document.getElementById('laps-item')
let clearButton = document.getElementById('clearAll')

function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    display.innerHTML = getTimer()
    ms++
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
}

function getTimer(){
    return (h<10 ? "0" + h : h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms)
}

function stop(){
    stopTimer()
}

function stopTimer(){
    clearInterval(timer)
    timer = false
}

function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}

function lap(){
    if(timer){
        let li = document.createElement("li")
        li.innerHTML = getTimer()
        laps.appendChild(li)
        clearButton.classList.remove("hidden")
    }
}

function clearAll(){
    laps.innerHTML = " "
    laps.append(clearButton)
    clearButton.classList.add("hidden")
}

