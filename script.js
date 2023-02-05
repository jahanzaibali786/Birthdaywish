var countDownDate = new Date("Feb 1,2023 04:36:00 PM").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                             //hours + " H : "+ minutes + " M : " +
  document.getElementById("jazi").innerHTML =hours +" Hr : "+minutes+" Min : "+seconds + " Sec" + "<br><br><br><br><br> Prepared By Hussy";

 if (distance < 0) 
 {
    clearInterval(countdownfunction);
    document.getElementById("surprise").innerHTML="Happy Birthday My Dear Brother"
    document.getElementById("jazi").innerHTML = "🧁❤️ Happy Birthday 🧁❤️<br>🎂❤️ Ibad Ur rehman🎂❤️ <br>“I wish you an amazing and beautiful year ahead, dear brother. May this day filled with joy and happiness .Hope this year bring more excitement and success . May this birthday bring you all the happiness you have ever wished for!.There’s no love comparable to that of what I have for you, .Many Many Happy Returns of the Day”🤍❤️‍🔥🥰❤️💯";
 }

}, 1000);
