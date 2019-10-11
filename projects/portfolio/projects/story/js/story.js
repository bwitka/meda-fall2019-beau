// We have two divs on our HTML page, one is #story and the other is #choices.

/***** RANDOM ANSWER CODE (start) *****/

const mystery1 = [
  "Sorry, you lose all your money and have to sell your car to buy a plane ticket home.",
  "Wow, you win $1,000,000,000 and decide to buy a casino in Las Vegas."
];

let randomAnswer1 = mystery1[Math.floor(Math.random() * mystery1.length)];

const mystery2 = [
  "Unfortunately your car breaks down and you never make it to the Grand Canyon.",
  "You continue on without any issues and spent ten days camping in the Grand Canyon."
];

let randomAnswer2 = mystery2[Math.floor(Math.random() * mystery2.length)];

const mystery3 = [
  "You're staying in Chelsea!",
  "You're staying in the East Village!"
];

let randomAnswer3 = mystery3[Math.floor(Math.random() * mystery3.length)];

const mystery4 = [
  "You're staying in Williamsburg, the hippest neighborhood in Brooklyn!",
  "You're staying in DUMBO, with a beautiful view of New York harbor."
];

let randomAnswer4 = mystery4[Math.floor(Math.random() * mystery4.length)];

const mystery5 = [
  "Cubana de Aviación no longer offers flights from Cancún to Cuba, so you'll have to come up with an alternate plan.",
  "You buy a ticket and fly to Cuba that same day."
];

let randomAnswer5 = mystery5[Math.floor(Math.random() * mystery5.length)];

const mystery6 = [
  "You're flying to Havana!",
  "You're flying straight to the beach resort of Varadero!"
];

let randomAnswer6 = mystery6[Math.floor(Math.random() * mystery6.length)];

const mystery7 = [
  "You decide to stay in the city of Barcelona.",
  "You head up the coast to the small city of Sitges."
];

let randomAnswer7 = mystery7[Math.floor(Math.random() * mystery7.length)];

const mystery8 = [
  "You stay in the city.",
  "You decide to walk the Camino de Santiago."
];

let randomAnswer8 = mystery8[Math.floor(Math.random() * mystery8.length)];

/***** RANDOM ANSWER CODE (end) *****/

$(document).ready(function() {
  $("#story").append(
    "<p>Your boss just awarded you two weeks of paid vacation time. Now all you need to do is decide where to go!</p>"
  );
  $("#choices").append("<button id='domesticTravel'>Domestic Travel</button>");
  $("#choices").append(
    "<button id='internationalTravel'>International Travel</button>"
  );

  $("#domesticTravel").click(function() {
    $("#story").html(
      "<p>Great! You've decided to travel domestically. You're having a hard time deciding between a road trip to the Grand Canyon or fly to New York City to visit a couple of old friends you haven't seen for a long time.</p>"
    );

    $("#domesticTravel").remove();
    $("#internationalTravel").remove();

    $("#choices").append("<button id='grandCanyon'>Grand Canyon</button>");
    $("#choices").append("<button id='newYorkCity'>New York City</button>");

    $("#grandCanyon").click(function() {
      $("#story").html(
        "<p>You chose to take a road trip to the Grand Canyon. Once you're on the road you stop in Las Vegas for gas. While you're there, you consider staying in the city for an hour. Do you stay and gamble for an hour or continue on your way?</p>"
      );

      $("#grandCanyon").remove();
      $("#newYorkCity").remove();

      $("#choices").append("<button id='gamble'>Stay and Gamble</button>");
      $("#choices").append(
        "<button id='continue'>Continue on Your Way</button>"
      );

      $("#gamble").click(function() {
        $("#story").html(
          "<p>You've decided to stay in Vegas for an hour and gamble...</p>"
        );

        $("#gamble").remove();
        $("#continue").remove();

        $("#choices").append(
          "<button id='mystery1'>Click here to see what happens next!</button>"
        );

        $("#mystery1").click(function() {
          $("#story").html(randomAnswer1);

          $("#mystery1").remove();
        });

        $("html").css({
          background: "url(images/gamble.jpg) no-repeat center center fixed"
        });
      });

      $("#continue").click(function() {
        $("#story").html(
          "<p>You've never been much of a gambler so you fill up on gas and continue on your way...</p>"
        );

        $("#gamble").remove();
        $("#continue").remove();

        $("#choices").append(
          "<button id='mystery2'>Click here to see what happens next!</button>"
        );

        $("#mystery2").click(function() {
          $("#story").html(randomAnswer2);

          $("#mystery2").remove();
        });

        $("html").css({
          background:
            "url(images/grand-canyon.jpg) no-repeat center center fixed"
        });
      });
    });
    $("#newYorkCity").click(function() {
      $("#story").html(
        "<p>You chose to book a flight to New York City and visit friends. Two of your friends have invited you to stay with them. One lives in Manhattan and the other lives in Brooklyn. Where do you want to go?</p>"
      );

      $("#grandCanyon").remove();
      $("#newYorkCity").remove();

      $("#choices").append("<button id='manhattan'>Manhattan</button>");
      $("#choices").append("<button id='brooklyn'>Brooklyn</button>");

      $("#manhattan").click(function() {
        $("#story").html(
          "<p>You've decided to stay with an old college buddy who lives in Manhattan...</p>"
        );

        $("#manhattan").remove();
        $("#brooklyn").remove();

        $("#choices").append(
          "<button id='mystery3'>Click here to see what neighborhood you're going to!</button>"
        );

        $("#mystery3").click(function() {
          $("#story").html(randomAnswer3);

          $("#mystery3").remove();
        });

        $("html").css({
          background: "url(images/manhattan.jpg) no-repeat center center fixed"
        });
      });

      $("#brooklyn").click(function() {
        $("#story").html(
          "<p>You have wanted to experience Brooklyn for quite some time and chose to stay with a friend who lives in the borough...</p>"
        );

        $("#manhattan").remove();
        $("#brooklyn").remove();

        $("#choices").append(
          "<button id='mystery4'>Click here to see what neighborhood you're going to!</button>"
        );

        $("#mystery4").click(function() {
          $("#story").html(randomAnswer4);

          $("#mystery4").remove();
        });

        $("html").css({
          background: "url(images/brooklyn.jpg) no-repeat center center fixed"
        });
      });
    });
  });

  $("#internationalTravel").click(function() {
    $("#story").html(
      "<p>Cool! You've decided to travel internationally. There are two countries you've always wanted to visit: Cuba and Spain. The only thing you have to do now is book a flight. Where do you want to go?</p>"
    );

    $("#domesticTravel").remove();
    $("#internationalTravel").remove();

    $("#choices").append("<button id='cuba'>Cuba</button>");
    $("#choices").append("<button id='spain'>Spain</button>");

    $("#cuba").click(function() {
      $("#story").html(
        "<p>You decide to go to Cuba. It's cheaper if you fly through Cancún, México, but much more convenient if pay extra for a direct flight. Which route do you want to take?</p>"
      );

      $("#cuba").remove();
      $("#spain").remove();

      $("#choices").append("<button id='cancun'>Cancún</button>");
      $("#choices").append("<button id='direct'>Direct Flight</button>");

      $("#cancun").click(function() {
        $("#story").html(
          "<p>You've decided to save some money and fly through Cancún...</p>"
        );

        $("#cancun").remove();
        $("#direct").remove();

        $("#choices").append(
          "<button id='mystery5'>Click here to see what happens next!</button>"
        );

        $("#mystery5").click(function() {
          $("#story").html(randomAnswer5);

          $("#mystery5").remove();
        });

        $("html").css({
          background: "url(images/cancun.jpg) no-repeat center center fixed"
        });
      });

      $("#direct").click(function() {
        $("#story").html(
          "<p>You don't mind spending the extra cash for a direct flight to Cuba. Click the button below to see where you end up on the island...</p>"
        );

        $("#cancun").remove();
        $("#direct").remove();

        $("#choices").append(
          "<button id='mystery6'>Click here to see what happens next!</button>"
        );

        $("#mystery6").click(function() {
          $("#story").html(randomAnswer6);

          $("#mystery6").remove();
        });

        $("html").css({
          background: "url(images/cuba.jpg) no-repeat center center fixed"
        });
      });
    });
    $("#spain").click(function() {
      $("#story").html(
        "<p>You're more in the mood for Europe and found some good prices online for flights to Spain. Now all you need to do is decide where to go. Your two top choices are Barcelona and Bilbao. Which will it be?</p>"
      );

      $("#cuba").remove();
      $("#spain").remove();

      $("#choices").append("<button id='barcelona'>Barcelona</button>");
      $("#choices").append("<button id='bilbao'>Bilbao</button>");

      $("#barcelona").click(function() {
        $("#story").html(
          "<p>Congrats! You're headed to Barcelona. Do you stay in the city or head up the coast to a smaller town?</p>"
        );

        $("#barcelona").remove();
        $("#bilbao").remove();

        $("#choices").append(
          "<button id='mystery7'>Click here to see where you're headed next...</button>"
        );

        $("#mystery7").click(function() {
          $("#story").html(randomAnswer7);

          $("#mystery7").remove();
        });

        $("html").css({
          background: "url(images/barcelona.jpg) no-repeat center center fixed"
        });
      });

      $("#bilbao").click(function() {
        $("#story").html(
          "<p>You've heard great things about northern Spain and Basque Country so you choose Bilbao over Barcelona. You can either stay in the city or hike the Camino de Santiago. Which will it be?</p>"
        );

        $("#barcelona").remove();
        $("#bilbao").remove();

        $("#choices").append(
          "<button id='mystery8'>Click here to see where you're headed next...</button>"
        );

        $("#mystery8").click(function() {
          $("#story").html(randomAnswer8);

          $("#mystery8").remove();
        });

        $("html").css({
          background: "url(images/bilbao.jpg) no-repeat center center fixed"
        });
      });
    });
  });
});
