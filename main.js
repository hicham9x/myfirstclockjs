let hrs = document.getElementById('hrs')
let mun = document.getElementById('mun')
let sec = document.getElementById('sec')


setInterval(()=>{
    let currentTime = new Date()
    hrs.innerHTML = (currentTime.getHours()<10?'0':"")+ currentTime.getHours()
    mun.innerHTML = (currentTime.getMinutes()<10?'0':"") + currentTime.getMinutes()
    sec.innerHTML = (currentTime.getSeconds()<10?'0':"") + currentTime.getSeconds()
},1000);
