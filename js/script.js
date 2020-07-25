/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
//

/*** `quotes` array ***/

const quotes = [
  {
    quote: "I've bean thinking of you.",
    source: 'A Bean in Love',
    emotion: 'In Love.'
  },

  {
    quote: "You butter back off pal!",
    source: 'An Angry Butter',
    citation: "I Can't Believe It's Not Butter",
    year: '2020',
    emotion: 'Angry.'
  },

  {
    quote: "This is so guac-ward.",
    source: 'A Socially Awkward Avocado',
    emotion: 'Awkward.'
  },

  {
    quote: "You wanna piece of me?!",
    source: 'An Irritated Slice of Cake',
    emotion: 'Angry.'
  },

  {
    quote: "I'm not ammoosed!",
    source: 'An Unamused Cow',
    emotion: 'Angry.'
  }
];

/*** `getRandomQuote` function ***/

function getRandomQuote() {
  // From Math Object course in Unit 1
  let randomQuote = Math.floor(Math.random() * quotes.length);

  // Return to store randomQuote object
  return quotes[randomQuote];
}

/*** `printQuote` function ***/

function printQuote() {
  let random = getRandomQuote();

  // Start of content that would generate inside of quote-box
  let htmlAdd = `<p class="quote">${random.quote}</p><p class="source">${random.source}`
  
  // Below only occurs only IF element contains that property in quotes array
  // Add property after quote and source

  // Citation prop
  if (random.citation) {
    htmlAdd += `<span class="citation">${random.citation}</span>`
  }

  // Year prop
  if (random.year) {
    htmlAdd += `<span class="year">${random.year}</span>`
  }

  // Emotion prop
  if (random.emotion) {
  htmlAdd += `<span class="emotion">${random.emotion}</span>`
  }

  // Close content
  htmlAdd += `</p>`;

  // Set NEW random quote inside quote-box
  let quoteBox = document.getElementById("quote-box");
  quoteBox.innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);