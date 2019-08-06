//RANDOM QUOTES
var quotes = [
"Fact 1",
"Fact 2",
"Fact 3",
"Fact 4"
];

var q_article = document.getElementById("wanda-facts");
var rand_int = Math.floor(Math.random() * 4);
q_article.innerHTML = quotes[rand_int];
