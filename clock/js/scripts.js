function clock() {
  let hour = document.getElementById('hour');
  let minute = document.getElementById('minute');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am = 'AM';

  // Converta o formato de 24 horas para o formato de 12 horas com o indicador AM PM
  if (h > 12) {
    var am = 'PM'
  }

  // Adicione 0 ao início do número se for menor que 10
  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am
}

var interval = setInterval(clock);