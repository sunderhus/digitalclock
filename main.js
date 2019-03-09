// determina tempo de atualizacao do relogio
setInterval(changeTime,100);
function changeTime (){
    const fullDate = new Date();
    // horarios em partes
    const day = fullDate.getDay();
    const month = fullDate.getMonth();
    const hours = fullDate.getHours();
    const minutes = fullDate.getMinutes();
    const seconds = fullDate.getSeconds();
    // elementos a serematualizados
    let d = document.getElementById('day');
    let mon = document.getElementById('month');

    let h = document.getElementById('h');
    let m = document.getElementById('m');
    let s = document.getElementById('s');
    // change values
    d.innerHTML = day;
    mon.innerHTML = month;
   
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
}