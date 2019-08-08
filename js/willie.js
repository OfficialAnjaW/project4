// Willie H2 Animation

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 50 * i;
    }
  });


// Random Images

var rand_int = Math.floor(Math.random() * 5);
var r_image = [
	"images/orca1.jpg",
	"images/orca2.jpg",
	"images/orca3.jpg",
  "images/orca4.jpg",
	"images/orca5.jpg"
],

im = document.getElementById("picture");
im.src = r_image[rand_int];

//RANDOM QUOTES
var williequotes = [
"Orcas are actually dolphins. They are the largest member of the dolphin family.",
"Orcas are highly intelligent, highly adaptable and able to communicate and coordinate hunting tactics.",
"A wild orca pod can cover over 160 kilometres a day, foraging and socialising.",
"Orcas are generalist eaters, consuming fish, seals and sea lions, dolphins and porpoises, sharks and rays, large whales, octopods and squids, seabirds and more.",
"Orcas only allow one half of their brains to sleep at a time. The other half stays alert, enabling them to continue breathing while also being able to look out for dangers in the environment.",
"Orcas only close one eye when they sleep. The left eye will be closed when the right half of the brain sleeps, and vice versa."
];

var q_article = document.getElementById("willie-facts");
var rand_int = Math.floor(Math.random() * 6);
q_article.innerHTML = williequotes[rand_int];
