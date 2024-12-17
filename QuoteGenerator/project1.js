 const quotes = [
    { quote: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson'},
    { quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.', author: 'Rick Cook' },
    { quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live', author: 'John Woods' },
    { quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { quote: 'Truth can only be found in one place: the code.', author: 'Robert C. Martin' },
    { quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.', author: 'Larry Niven' },
    { quote: 'You\'ve baked a really lovely cake, but then you\'ve used dog shit for frosting.', author: 'Steve Jobs' },
    { quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.', author: 'Alan J. Perlis' },
    { quote: 'The most disastrous thing that you can ever learn is your first programming language.', author: 'Alan Kay' },
    { quote: 'The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.', author: 'Joseph Weizenbaum' },
    { quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?', author: 'Brian Kernighan' },
    { quote: 'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', author: 'Ram Ray' },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" }
  ];

  //generating the random quote
  function getrandom()
  {
  const random = Math.floor(Math.random()*quotes.length);
  return quotes[random];
  }
  //clearing all the previous content
  function clearAll() {
    const container = document.querySelector(".mainsection");
      container.textContent = ""; 
  }
  //function for showing the quote in the UI
  function showQuote()
  {
  const content = getrandom();
  const contentarea = document.querySelector(".mainsection");
  const button = document.querySelector(".button");
  const quote = document.createElement("p");
  const author = document.createElement("p");
  quote.textContent = content.quote + "-";
  author.textContent = content.author;
  clearAll();
  contentarea.appendChild(quote);
  contentarea.appendChild(author);
  }