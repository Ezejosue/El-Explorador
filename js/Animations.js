let value;

// $(document).ready(function () {
//   $("body #items").on("click", "div", function () {
//     value = $(this).attr("id");
//     console.log(value);
//   });
// });

$("div[id^=Card]").click(function () {
  value = $(this).attr("id");
  console.log(value);
});

function clickCard() {
  if (value == "Card1") {
    document.getElementById("Card1").style.zIndex = "1";
    document.getElementById("Card1").style.opacity = "1";
    document.getElementById("Card2").style.zIndex = "0";
    document.getElementById("Card2").style.opacity = "0.5";
    document.getElementById("Card3").style.zIndex = "0";
    document.getElementById("Card3").style.opacity = "0.5";
    document.getElementById("Card4").style.zIndex = "0";
    document.getElementById("Card4").style.opacity = "0.5";
    document.getElementById("Card5").style.zIndex = "0";
    document.getElementById("Card5").style.opacity = "0.5";
    document.getElementById("Card6").style.zIndex = "0";
    document.getElementById("Card6").style.opacity = "0.5";
  } else if (value == "Card2") {
    document.getElementById("Card2").style.zIndex = "1";
    document.getElementById("Card2").style.opacity = "1";
    document.getElementById("Card1").style.zIndex = "0";
    document.getElementById("Card1").style.opacity = "0.5";
    document.getElementById("Card3").style.zIndex = "0";
    document.getElementById("Card3").style.opacity = "0.5";
    document.getElementById("Card4").style.zIndex = "0";
    document.getElementById("Card4").style.opacity = "0.5";
    document.getElementById("Card5").style.zIndex = "0";
    document.getElementById("Card5").style.opacity = "0.5";
    document.getElementById("Card6").style.zIndex = "0";
    document.getElementById("Card6").style.opacity = "0.5";
  } else if (value == "Card3") {
    document.getElementById("Card3").style.zIndex = "1";
    document.getElementById("Card3").style.opacity = "1";
    document.getElementById("Card1").style.zIndex = "0";
    document.getElementById("Card1").style.opacity = "0.5";
    document.getElementById("Card2").style.zIndex = "0";
    document.getElementById("Card2").style.opacity = "0.5";
    document.getElementById("Card4").style.opacity = "0.5";
    document.getElementById("Card5").style.opacity = "0.5";
    document.getElementById("Card6").style.opacity = "0.5";
  } else if (value == "Card4") {
    document.getElementById("Card4").style.zIndex = "1";
    document.getElementById("Card4").style.opacity = "1";
    document.getElementById("Card1").style.zIndex = "0";
    document.getElementById("Card1").style.opacity = "0.5";
    document.getElementById("Card2").style.zIndex = "0";
    document.getElementById("Card2").style.opacity = "0.5";
    document.getElementById("Card3").style.zIndex = "0";
    document.getElementById("Card3").style.opacity = "0.5";
    document.getElementById("Card5").style.opacity = "0.5";
    document.getElementById("Card6").style.opacity = "0.5";
  } else if (value == "Card5") {
    document.getElementById("Card5").style.zIndex = "1";
    document.getElementById("Card5").style.opacity = "1";
    document.getElementById("Card1").style.zIndex = "0";
    document.getElementById("Card1").style.opacity = "0.5";
    document.getElementById("Card2").style.zIndex = "0";
    document.getElementById("Card2").style.opacity = "0.5";
    document.getElementById("Card3").style.zIndex = "0";
    document.getElementById("Card3").style.opacity = "0.5";
    document.getElementById("Card4").style.zIndex = "0";
    document.getElementById("Card4").style.opacity = "0.5";
    document.getElementById("Card6").style.opacity = "0.5";
  } else if (value == "Card6") {
    document.getElementById("Card6").style.zIndex = "1";
    document.getElementById("Card6").style.opacity = "1";
    document.getElementById("Card1").style.zIndex = "0";
    document.getElementById("Card1").style.opacity = "0.5";
    document.getElementById("Card2").style.zIndex = "0";
    document.getElementById("Card2").style.opacity = "0.5";
    document.getElementById("Card3").style.zIndex = "0";
    document.getElementById("Card3").style.opacity = "0.5";
    document.getElementById("Card4").style.zIndex = "0";
    document.getElementById("Card4").style.opacity = "0.5";
    document.getElementById("Card5").style.zIndex = "0";
    document.getElementById("Card5").style.opacity = "0.5";
  }
}

function dCard() {
  document.getElementById("Card1").style.zIndex = "0";
  document.getElementById("Card1").style.opacity = "1";
  document.getElementById("Card2").style.zIndex = "0";
  document.getElementById("Card2").style.opacity = "1";
  document.getElementById("Card3").style.zIndex = "0";
  document.getElementById("Card3").style.opacity = "1";
  document.getElementById("Card4").style.zIndex = "0";
  document.getElementById("Card4").style.opacity = "1";
  document.getElementById("Card5").style.zIndex = "0";
  document.getElementById("Card5").style.opacity = "1";
  document.getElementById("Card6").style.zIndex = "0";
  document.getElementById("Card6").style.opacity = "1";
}
