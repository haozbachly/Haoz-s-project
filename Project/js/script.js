/*Create a two-dimensional array with object literal that contains information about quote, source, category, citation (optional), date (optional) 
for each object inside.*/
const quotes = [
  {
    quote: 'We are not interested in the possibilities of defeat. They do not exist.',
    source: 'Queen Victoria',
    category: 'Inspiration',
    citation: 'To A. J. Balfour, in \'Black Week\'',
    date: 'December 1899',
  },
  {
    quote: 'Life is really simple, but we insist on making it complicated',
    source: 'Confucius',
    category: 'Life',
    citation: '',
    date: '',
  },
  {
    quote: 'Now is the winter of our discontent',
    source: 'William Shakespeare',
    category: 'Discontent',
    citation: 'Richard III Act 1, Scene 1',
    date: '',
  },
  {
    quote: 'The dimensions of this mercy are above my thoughts. It is, for aught I know, a crowning mercy',
    source: 'Oliver Cromwell',
    category: 'Mercy',
    citation: 'Letter to William Lenthall',
    date: 'September 4, 1651',
  },
  {
    quote: 'A desperate disease requires a dangerous remedy',
    source: 'Guy Fawkes',
    category: 'Desperate',
    citation: '',
    date: 'November 6, 1605 ',
  },
  {
    quote: 'In the beginning God created the heaven and the earth',
    source: 'Bible, King Jams version',
    category: 'God',
    citation: 'Genesis 1:1',
    date: '',
  },
  {
    quote: 'The empty vessel makes the loudest sound',
    source: 'William Shakespeare',
    category: 'soul',
    citation: 'Henry V: Act 4, Scene 4, Page 4',
    date: '',
  }
]
// getRandomQuote function: generate a randomNumber to select a random object inside the quotes array
function getRandomQuote (listOfQuotes) {
  let number = Math.floor(Math.random() * (listOfQuotes.length + 1));
  return listOfQuotes[number];
}
/* printQuote function: adding contents from quotes array to proper HTML tag:
+ Tag quote: Adding appropriate information in quotes array to class = 'quote' tag
+ Tag source: Adding appropriate information in quotes array to class = 'source' tag
+ Add additional information about category to categories tag
+ Create two new spans, then adding its contents to the class = 'source' tag if their information was presented in the quotes array
+ Change body background-color to an randomColors
*/
function printQuote() {
  let action = getRandomQuote(quotes);
  let resource = [
    document.getElementById('quote-box').querySelector('.quote').innerHTML = action.quote,
    document.getElementById('quote-box').querySelector('.source').innerHTML = action.source,
    document.getElementById('categories').innerHTML = action.category.toUpperCase()
  ];
  let adding = document.getElementById('quote-box').querySelector('.source');
  if (action.citation !== '') {
    let span1 = document.createElement('span');
    adding.append(span1.innerHTML = `, ${action.citation}`);
  }  
  if (action.date !== '') {
    let span2 = document.createElement('span');
    adding.append(span2.innerHTML = `, ${action.date}`) ;
  }
  document.body.style.backgroundColor=`rgb(${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)},${parseInt(Math.random() * 256)})`;
}

/* event listener to respond to "Show another quote" button clicks
 when user clicks anywhere on the button, the "printQuote" function is called
*/
document.getElementById('loadQuote').addEventListener("click", printQuote);

// set an interval of changing quotes between 10 secconds
setInterval(printQuote, 10000);