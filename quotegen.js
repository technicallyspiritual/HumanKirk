const quoteArray = ["Maybe I can get her to say 'Cat Kirk' when she's calling Kirk and 'Human Kirk' when she's calling me.",
"I'm so lonely, even Animal Planet doesn't do it for me anymore.", "It occured to me one day: cows don't wrinkle.",
"The worst part of night terrors is it always ends up with me on top of the roof completely naked...",
"I love carrot sticks, especially the crinkle cut kind.", "I've been working for 11 years, Luke. I have had 15,000 jobs.",
"Just don't touch my bottom or I'll think you have a machete.", "People don't want to know how the sausage gets made they just want to eat.",
"We're not supposed to be arguing, Taylor. We're supposed to be making love.", "Technically, I'm a giant weiner. The costume says 'weiner'.",
"I don't even know his name. I was using random sounds,  tryin to see if he'd respond. Paku. Gnocchi. Nini. Bleeblo.",
 "Information is our greatest weapon.", "I had an imaginary girlfriend for a while when I was young, but she left me.",
 "Well, whimsy goes with everything.", "I don't know why everyone in this town always thinks I'm crazy.",
 "Your eyes are spinning in different directions.", "Ladies, gentlemen, honored guests... Who owns the silver Volvo, because you're blocking me in.",
 "I took a lesson, the guy said I was a natural at falling.", "I want to get the healthy glow of someone who goes to the gym... Without having to go to the gym of course.",
 "Your demands are Kirk's demands. Your needs are Kirk's needs. Kirk is here for you.", "I discovered that Kirk likes my presence announced before I enter any room that he's in.",
 "I can't assault her before I tell her I love her.", "I was kind of a target. I used to wear a cape to school.", "Sorry. My excitement must be clouding my ability to judge comedic hyperbole.",
 "Well frankly, I have my doubts about your dog's ability to predict the future.", "An oral agreement is only as good as the paper it's written on.",
 "I carried a duffel bag and ate lunch by myself my entire school career, and I turned out fine.", "Yes, but, how can I have a career as a Poe?",
 "This is the suit they buried my dad in."];

 function kirkQuote() {
   var kirkSays = quoteArray[Math.floor(Math.random() * quoteArray.length)];
   return kirkSays;
 }
 function generate() {
 document.getElementById("demo").innerHTML = kirkQuote();
}
