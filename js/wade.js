// Wade H2 Animation

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 3000,
    delay: function(el, i) {
      return 45 * i;
    }
  });

  //RANDOM QUOTES
  
  var wadequotes = [
  "Sperm whales are constantly feeding. They can eat about 3% of their body weight daily, sometimes up to 2 tons of food!",
  "Sperm whales can dive to depths of more than 3,000 ft. They mostly dive this deep in search of prey such as squids. Sperm whales can also hold their breaths for up to 90 minutes.",
  "Sperm whales have the largest brain of any animal on Earth.",
  "Sperm whales got their name because the semi-liquid, waxy substance in their head was first believed to be sperm."
  ];

  var q_article = document.getElementById("wade-facts");
  var rand_int = Math.floor(Math.random() * 4);
  q_article.innerHTML = wadequotes[rand_int];
