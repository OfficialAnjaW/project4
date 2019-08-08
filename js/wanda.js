// Wanda H2 Animation

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  });

//RANDOM QUOTES

var wandaquotes = [
"Humpback whales can be found in every ocean in the world.",
"Their Latin name is megaptera novaeangliae. It means “Big Wing of New England.”",
"Their pectoral fins can grow up to 16 feet long.",
"Humpback calves are known to “whisper” to their mothers.",
"Humpback whales feed on tiny shrimp-like krill, plankton and small fish."
];

var q_article = document.getElementById("wanda-facts");
var rand_int = Math.floor(Math.random() * 5);
q_article.innerHTML = wandaquotes[rand_int];
