/******************************************
Tammi Carter
project 1 - A Random Quote Generator (GOING FOR EXCEEDS EXPECTATION)
******************************************/
//* created an array that holds quote objects; using object literal's. (added citation, tag and year for Exceeds Expectation.)

var quote = [ 
  {
   quote: 'Be who You are, those that Mind Don\'t Matter and those that Matter Don\'t Mind.',
   source: 'Dr. Seuss, with a Tammi Carter twist :-)',
   tag: '~Life Lessons',
  },

  {
     quote: 'They say dont get bitter get better, keep working on switching those letters.',
     source: 'Lecrae',
     citation: 'Song Title: ' + '"I\'ll find you"', 
     tag: '~Music',
     year: '2017', 
  },

  {
     quote: 'Wisdom is the principle thing: therefore get wisdom: and with all thy getting get understanding.',
     source: 'King Solomon ~ "Bible KJV"',
     year: '~700 BC. ' ,
     tag: '~Sprituality',
  },

  {
     quote: 'Always do your best. What you plant now, you will harvest later.', 
     source: 'Og Mandino' , 
     tag: '~Inspiration',
  },

  {
     quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
     source: 'Helen Keller.',
     citation: '~Helen Keller Quotes. (n.d.). BrainyQuote.com. Retrieved October 21, 2019, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/helen_keller_16457',
     
  },
  
   { 
     quote: 'We May Encounter Many Defeats But We Must Not Be Defeated.', 
     source: 'Maya Angelou',
     tag: '~Motivation' 
     
  }
];
//* created getRandomQuote function that pulls Random Quote(s) declares them and returns and stores them.
 function getRandomQuote() {
         var randomQuote = Math.floor(Math.random() * quote.length);
         return quote[randomQuote];
   }
//* created PrintQuote function using the random quote variable that pulls random quotes (using concatenation and if statements) printing them in HTML format 
function printQuote() {
   var getQuote = '';
   var message = getRandomQuote(quote);
    getQuote = '<p class = "quote">' + message.quote + '</p>';
    getQuote += '<p class = "source">' + message.source +',';
   
    if (message.year) {
      getQuote += `<span class = "year"> ${message.year} </span>`;
    }
  
   if (message.tag) {
      getQuote += `<span class = "tag"> ${message.tag} </span>`;
   }
   if (message.citation) {
      getQuote += `<span class = "citation"> ${message.citation} </span>`;
      
   }    
   document.getElementById('quote-box').innerHTML= getQuote;
 //* function named myTimer , set myVar to setInterval and pass in printQuote, and a timer 
  myTimer();
  function myTimer() {
   myVar= setInterval(printQuote, 20000);
//*end function   
    }
//*function named myStopFunction call clearInterval when button is pushed; pass in myVar.
   myStopFunction();
  function myStopFunction() { 
  myVar= clearInterval(getQuote); 
   }
//* Random & BGC function copied from W3 resources https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php 
  random_bg_color();   
  function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        document.body.style.background = bgColor;
    }      
  }
//*end function
document.getElementById('quote-box').innerHTML;
//*DO NOT CHANGE EVENT LISTENER FUNCTION BELOW 
document.getElementById('load-quote').addEventListener("click", printQuote, false);
