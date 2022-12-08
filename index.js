require("dotenv").config();
const { Telegraf } = require("telegraf");
const classifierJSON = require('./classifier.json')
const TelegramBot = require('node-telegram-bot-api');
const natural = require('natural');
var nlpControl = require('./nlpcontrol');

const bot = new Telegraf(process.env.BOT_TOKEN);
var classifier = new natural.BayesClassifier();

// Add the NLP.
//nlpControl.add(classifier);

//var json_file = classifierJSON['docs'];
//var len = json_file.length;

// Check how much a typed word matches an actual word.
/*function check(label, word){
  var stemmed_word = natural.PorterStemmer.stem(word.toLowerCase());
  var actual_word;

  for (var i = 0; i < len; i++) {
    if (json_file[i]['label'] == label) {
      actual_word = json_file[i]['text'][0];
      break;
    }
  }
  if (natural.JaroWinklerDistance(stemmed_word, actual_word) > 0.5) {
    console.log(natural.JaroWinklerDistance(stemmed_word, actual_word))
    console.log(stemmed_word);
    console.log(actual_word);
    return true;
  }
  else {
    console.log(natural.JaroWinklerDistance(stemmed_word, actual_word))
    console.log(stemmed_word);
    console.log(actual_word);
    return false;
  }
}
*/

bot.on("message", (message) => {
  console.log(classifier.getClassifications(message.text))
  var str = message.text;
  

  if (str === '/') { 
  }
  else if (classifier.getClassifications(message.text)) {
    if (classifier.getClassifications('label')) {
      bot.sendMessage(message.chat.id,('text'));
    }
    /*else if (classifier.getClassifications(message.text)[0]['label'] == 'bye' || check('bye', message.text)) {
      bot.sendMessage(message.chat.id, (nlpControl.NLGfarewells[Math.floor(Math.random() * nlpControl.NLGfarewells.length)]));
    }
    else if (classifier.getClassifications(message.text)[0]['label'] == 'smalltalk' || check('smalltalk', message.text)) {
      bot.sendMessage(message.chat.id, (nlpControl.NLGsmalltalk[Math.floor(Math.random() * nlpControl.NLGsmalltalk.length)]));
    }*/
  else {
    bot.sendMessage(message.chat.id, "Sorry, did not get that. Can you say it again?");
  }
}
});
//bot.start(async (ctx) => {
  //ctx.reply("What should I remind you?");
//});

bot.launch();