var countDownDate = new Date("Jan 31, 2023 03:01:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("jazi").innerHTML = hours + " H : "
  + minutes + " M : " + seconds + " Sec";

 if (distance < 0) 
 {
    clearInterval(countdownfunction);
    document.getElementById("jazi").innerHTML = "Happy Birthday <br> Ibad Ur Rehman ❤️";
 }

}, 1000);
