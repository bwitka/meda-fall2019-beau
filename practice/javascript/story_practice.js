// Some ideas for story title: "travelTime!", "globeTrotter!", "surpriseVacation!",

let story1 =
  "Your boss just told you that you've been awarded two weeks of paid vacation. You've saved some money and can really use a break from work. Now all you need to decide is where to go!";

console.log(story1);

let domesticTravel = true;

if (domesticTravel) {
  let story2 =
    "You choose to not travel internationally and instead plan a road trip from San Francisco to the Grand Canyon.";

  console.log(story2);

  let grandCanyon = true;

  if (grandCanyon) {
    let story3 =
      "You make a stop in Las Vegas and decide to gamble for an hour. You win $1,000 and continue on your way to the Grand Canyon.";

    console.log(story3);
  } else {
    let story3 =
      "You make a stop in Las Vegas and decide to gamble for an hour. You're not an experienced gambler and manage to lose all of your money that you have saved for your road trip. You have to return home to San Francisco.";

    console.log(story3);
  }
} else {
  let story2 =
    "You have always wanted to travel to Cuba, so you book a flight to Cancún, México. When you get to Cancún, you will buy a plane ticket to Havana.";

  console.log(story2);

  let cuba = true;

  if (cuba) {
    let story3 =
      "You arrive to the airport in Cancún on time, make your way to the Cubana de Aviación office and buy a ticket on the next flight to Havana.";

    console.log(story3);
  } else {
    let story3 =
      "You arrive to the Cancún airport and learn that there are no longer flights to Cuba. Now your best option is to stay in Cancún for the duration of your vacation.";

    console.log(story3);
  }
}
