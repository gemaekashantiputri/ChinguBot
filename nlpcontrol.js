const natural = require('natural');
const classifier = new natural.BayesClassifier();

//NLGgreetings = ["Hey.", "Hi.", "Hello.", "Greetings.", "Hi, friend.", "Hello, human."];
//NLGfarewells = ["Bye!", "See you.", "Nice working with you.", "Later!", "Goodbye, human!", "Bye bye."];
//NLGsmalltalk = ["Okay.", "Alrighty.", "Yup.", "Uh-huh.", "Hmmm.", "Alright.", "Mhmm.", "Yeah."];


    // Greeting intent.
    classifier.addDocument('hello', 'Hi, friend');
    classifier.addDocument('hi', 'Hey');
    classifier.addDocument('howdy', 'Hi');
    classifier.addDocument('hey', 'Hey, human');
    classifier.addDocument('hola', 'greetings');
    classifier.addDocument('yo', 'Hi');
    // Farewell intent.
    classifier.addDocument('bye', 'bye');
    classifier.addDocument('goodbye', 'see you');
    classifier.addDocument('good bye', 'bye, Human');
    classifier.addDocument('later', 'Later');
    classifier.addDocument('farewell', 'Nice working with you');
    classifier.addDocument('see ya', 'Have nice day');
    // Smalltalk intent.
    classifier.addDocument('ok', 'okey');
    classifier.addDocument('okay', 'Yup');
    classifier.addDocument('alright', 'smalltalk');
    classifier.addDocument('ya', 'yeah');
    classifier.addDocument('yeah', 'Alrighty');
    classifier.addDocument('haha', 'Hmm');

    //function addIntents(classifier) {
    // Greeting intent.
    /*classifier.addDocument('hello', 'greeting');
    classifier.addDocument('hi', 'greeting');
    classifier.addDocument('howdy', 'greeting');
    classifier.addDocument('hey', 'greeting');
    classifier.addDocument('hola', 'greeting');
    classifier.addDocument('yo', 'greeting');
    // Farewell intent.
    classifier.addDocument('bye', 'bye');
    classifier.addDocument('goodbye', 'bye');
    classifier.addDocument('good bye', 'bye');
    classifier.addDocument('later', 'bye');
    classifier.addDocument('farewell', 'bye');
    classifier.addDocument('see ya', 'bye');
    // Smalltalk intent.
    classifier.addDocument('ok', 'smalltalk');
    classifier.addDocument('okay', 'smalltalk');
    classifier.addDocument('alright', 'smalltalk');
    classifier.addDocument('ya', 'smalltalk');
    classifier.addDocument('yeah', 'smalltalk');
    classifier.addDocument('haha', 'smalltalk');
*/
    
    classifier.train();
    //console.log(classifier.getClassifications('hello'));
    //console.log(classifier.classify('hello'));
    //classifier.save('classifier.json', function(err, classifier){
    //}); 
     
//}
    // Use the code below if you want to modify the intents! Make sure to delete classifier.json first.
    // classifier.save('classifier.json', function(err, classifier) {
    //   // the classifier is saved to the classifier.json file!
    // });

/*module.exports = {
    add: addIntents,
    NLGgreetings: NLGgreetings,
    NLGfarewells: NLGfarewells,
    NLGsmalltalk: NLGsmalltalk
  };
*/
 