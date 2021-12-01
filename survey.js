const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What\'s your name? Nicknames are also acceptable :) ", (answer) => {
  const name = answer;
  rl.question("What\'s an activity you like doing? ", (answer) => {
    const faveHobbies = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      const faveMusic = answer;
      rl.question("Which meal is your favourite? ", (answer) => {
        const faveMeal = answer;
        rl.question("What\'s your favourite thing to eat for that meal? ", (answer) => {
          const faveItem = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            const faveSport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
            const superPower = answer;
            console.log(`Hello there, my name is ${name}. ${name} enjoys ${faveHobbies}, and while exercising, he likes to listen to ${faveMusic}. ${name} loves ${faveMeal} and favourite is ${faveItem}. ${name} prefers ${faveSport} over other sports. ${name} has many talents but ${superPower} is definitely very unique ;).`);
            
            rl.close();
            });
          });
        });
      });
    });
  });
});