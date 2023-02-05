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
    document.getElementById("surprise").innerHTML="Happy Birthday<br> My Love ❤️"
    document.getElementById("jazi").innerHTML = "Happy birthday to the one who holds my heart and dreams. I am wishing you the most blessed of years this next year. I love you! On this very special day, I want you to know how much you are loved, not just by me but by everyone who knows you. Happy birthday, sweet love! Here’s to you, the culmination of all of my hopes and dreams. May today be a day filled with joy, blessings, and peace. Happy birthday, dear one!Today is yet another chance to celebrate the awesome uniqueness that is you. You are sweet, kind, and vibrant in every way. Thank you for the person you are for me. Happy birthday, my love!Not only are you the most loving wife a man could ever wish for but you are also my best friend. On this special day I want to tell you how much I appreciate you in my life. Happy Birthday, darling! To me, you mean the whole world and I love you more than words could ever express! My favorite moments in life are when I am given an unexpected blessing. You are the best blessing I have had by far.To the most beautiful birthday girl of the century: your life is amazing because you have not ignored the secret of it all- that love is the greatest thing, and you’re so good at loving others. Happy Birthday, and may it be all you deserve and more.Some say being pretty can open doors of opportunity. But you open doors with your intentional living, loving care, and an open heart. And you make it look so easy too! Thank you for leading the rest of us on this worthwhile path. Happy Birthday, gorgeous woman.🤍❤️‍🔥🥰❤️💯";
 }

}, 1000);
