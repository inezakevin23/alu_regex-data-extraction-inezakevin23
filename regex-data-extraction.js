const testStrings = [
  // Emails
  "Valid email: user@example.com",
  "valid email: firstname.lastname@company.co.uk",
  "Invalid email: @example.com",

  // URLs
  "Visit https://www.example.com",
  "Visit http://sub.example.org/page",
  "Invalid URL: www example com",

  // Phone Numbers
  "Call me at (123) 456-7890",
  "my phone number: 123-456-7890",
  "Tel: 123.456.7890",
  "Invalid phone: 12-3456",

  // Credit Cards
  "My card: 1234 5678 9012 3456",
  "Another: 1234-5678-9012-3456",
  "Without separator: 1234567890123456",
  "Invalid card: 1234-5678-9012",

  // Hashtags
  "Here are hashtags: #example #ThisIsAHashtag #123test",
  "Invalid hashtag: # with space"
];


const patterns = {
  email_addresses: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  urls: /https?:\/\/[^\s/$.?#].[^\s]*/g,
  phone_numbers: /(\(\d{3}\)\s*|\d{3}[\s.-]?)\d{3}[\s.-]?\d{4}/g,
  credit_card_numbers: /\b\d{4}([ -]?\d{4}){3}\b/g,
  hashtags: /#\w+/g
};

// Extraction Function
function extractData() {
  console.log("=== DATA EXTRACTION ===");

  // Emails (tested individually)
  console.log("\n=== EMAILS ===");
  testStrings.forEach(str => {
    const words = str.split(/\s+/);
    words.forEach(word => {
      if (patterns.email_addresses.test(word)) {
        console.log(`${str} → ${word}`);
      }
    });
  });

  // URLs
  console.log("\n=== URLS ===");
  testStrings.forEach(str => {
    const words = str.split(/\s+/);
    words.forEach(word => {
      if (patterns.urls.test(word)) {
        console.log(`${str} → ${word}`);
      }
    });
  });

  // Phone Numbers
  console.log("\n=== PHONE NUMBERS ===");
  testStrings.forEach(str => {
    if (patterns.phone_numbers.test(str)) {
      console.log(`${str} → ${str.match(patterns.phone_numbers)[0]}`);
    }
  });

  // Credit Card Numbers
  console.log("\n=== CREDIT CARDS ===");
  testStrings.forEach(str => {
    if (patterns.credit_card_numbers.test(str)) {
      console.log(`${str} → ${str.match(patterns.credit_card_numbers)[0]}`);
    }
  });

  // Hashtags
  console.log("\n=== HASHTAGS ===");
  testStrings.forEach(str => {
    const matches = str.match(patterns.hashtags);
    if (matches) {
      console.log(`${str} → ${matches}`);
    }
  });
}

//call function to see results
extractData();