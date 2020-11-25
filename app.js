
const chalk = require('chalk');
console.log(chalk.
bold.yellowBright("HI!!! This fun Quiz is dedicated to All Jai-Veeru And Gabbar Fans and also my project submission for levelZero Neog Bootcamp..! "))
console.log(chalk.bold.red("LET THE 'SHOLEY' BEGIN...\n"))
var readline=require('readline-sync');
var score=0;
var highScorerUser=chalk.bold.red('SHASHANK SAHU');
var userScore=chalk.bold.red('5');
var userName=readline.question(chalk.bold.blueBright("What is your name?"));
console.log(chalk.bold.yellowBright("Welcome "+ userName ));
console.log(chalk.bold.greenBright("Note!!you just have to enter your choice from the given options.\n"))
function play(question,answer){
  var userAns=readline.question(question);
  if(userAns.toLowerCase()===answer)
  {
    console.log(chalk.bgRedBright("WOW! "+userName+"!! You are Right!!!"))
    score=score+1
  }
  else{
    console.log(chalk.bgRedBright("sorry, you are wrong :(( "));
  }
  console.log(chalk.bold.bgYellow("CURRENT SCORE : " ,score));
  console.log("==========================================");
}
var questions=[{
  question:chalk.bold.cyanBright("(1)Sholey was released in the year? \n(a)1993\n(b)1995\n(c)1980\n(d)1975\n"),
  answer:"d"
},
{
  question:chalk.bold.cyanBright("(2)What was Thakur’s full name in the movie? \n(a)Thakur Baldev Singh\n(b)Thakur Vijay Pratp Singh\n(c)Thakur Balvant Singh\n(d)none of these\n"),
  answer:"a"
},
{
question:chalk.bold.cyanBright("(3)'When I dead, police coming ... police coming, budiya going jail ... in jail budiya chakki peesing, and peesing, and peesing, and peesing, and peesing'!!This dialogue was told by whom??\n(a)Gabbar Singh\n(b)Jai\n(c)Veeru\n(d)Thakur\n"),
  answer:"c"
},
{
  question:chalk.bold.cyanBright("(4)What was the name of Jaya Bachchan’s character?\n(a)Jaya\n(b)Radha\n(c)suman\n"),
  answer:"b"
},
{
  question:chalk.bold.cyanBright("(5)How much did Thakur offer Jai and Veeru to capture Gabbar?\n(a)25000\n(b)50000\n(c)20000\n(d)10000\n"),
  answer:"c"
},
{
  question:chalk.bold.cyanBright("(6)What was the name of Gabbar Singh’s arms supplier?\n(a)Samba\n(b)Heera\n(c)Chadha Singh\n(d)none\n"),
  answer:"b"
},
{
question:chalk.bold.cyanBright("(7)'Basanti in kutto ke samne mat nachna'!!This famous dialogue was told by whom??\n(a)Sambha\n(b)Jai\n(c)Thakur\n(d)Veeru\n"),
  answer:"d"
}
]
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
// if(userScore<=score)
// {
// console.log(chalk.bold.red("YAY!!Game over and you are our Top scorer, your final score is ",+score+ " out of 7"))
// }else
// {
console.log(chalk.bold.red("YAY!!GAME OVER and your final score is ",+score+ " out of 7"))
// }
console.log(chalk.bold.yellowBright('Our Previous High Scorer was '+ highScorerUser+' --------  ',userScore));
console.log(chalk.bold.green("Thank you for playing this game...Please do share a screenshot of your final score."));

