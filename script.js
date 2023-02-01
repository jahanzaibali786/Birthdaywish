var countDownDate = new Date("Feb 1, 2023 03:05:00").getTime();

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
    document.getElementById("surprise").innerHTML="Happy Birthday My Love"
    document.getElementById("jazi").innerHTML = "Happy Birthday TaNnu ❤️ <br>Happy birthday to the one who holds my heart and dreams. I am wishing you the most blessed of years this next year. I love you <br> On this very special day, I want you to know how much you are loved, not just by me but by everyone who knows you.<br> Happy birthday, sweet love! Here’s to you, the culmination <br> of all of my hopes and dreams. May today be a day filled with<br> joy, blessings, and peace. Happy birthday, dear one Today is yet another chance to celebrate the awesome uniqueness that is you. You are sweet, kind, and <br> vibrant in every way. Thank you for the person you are for me. Happy birthday, my love! Not only are you the most loving<br> wife a man could ever wish <br>for but you are also my best friend. On this special day I <br> want to tell you how much I appreciate you in my life.<br> Happy Birthday, darling! <br> To me, you mean the whole <br> world and I love you more than words could ever express! My favorite moments in life are<br> when I am given an unexpected blessing. You are the best<br> blessing I have had by far.<br> To the most beautiful birthday<br> girl of the century: your life is amazing because you have not ignored the secret of it all- that love is the greatest thing, and you’re so good at loving others. Happy Birthday, and may it<br> be all you deserve and more. Some say being pretty can open doors of opportunity. But you open doors with your intentional living, loving care, and an open heart. And you make it look so easy too! Thank you for leading the rest of us on this worthwhile path. Happy Birthday, gorgeous woman.🤍❤️‍🔥🥰❤️💯";
 }

}, 1000);
