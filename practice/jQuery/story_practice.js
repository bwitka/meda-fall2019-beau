// We have two divs on our HTML page, one is #story and the other is #choices.

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
          "<button id='mystery2'>Click here to see what happens next!</button>"
        );
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
          "<button id='mystery1'>Click here to see what neighborhood you're going to!</button>"
        );
      });

      $("#brooklyn").click(function() {
        $("#story").html(
          "<p>You have wanted to experience Brooklyn for quite some time and chose to stay with a friend who lives in the borough...</p>"
        );

        $("#manhattan").remove();
        $("#brooklyn").remove();

        $("#choices").append(
          "<button id='mystery2'>Click here to see what neighborhood you're going to!</button>"
        );
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
          "<button id='mystery3'>Click here to see what happens next!</button>"
        );
      });

      $("#direct").click(function() {
        $("#story").html(
          "<p>You don't mind spending the extra cash for a direct flight to Cuba. Click the button below to see where you end up on the island...</p>"
        );

        $("#cancun").remove();
        $("#direct").remove();

        $("#choices").append(
          "<button id='mystery3'>Click here to see what happens next!</button>"
        );
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
          "<button id='mystery4'>Click here to see where you're headed next...</button>"
        );
      });

      $("#bilbao").click(function() {
        $("#story").html(
          "<p>You've heard great things about northern Spain and Basque Country so you choose Bilbao over Barcelona. You can either stay in the city or hike the Camino de Santiago. Which will it be?</p>"
        );

        $("#barcelona").remove();
        $("#bilbao").remove();

        $("#choices").append(
          "<button id='mystery4'>Click here to see where you're headed next...</button>"
        );
      });
    });
  });
});
