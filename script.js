const patterns = {
  email_addresses: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  urls: /https?:\/\/[^\s/$.?#].[^\s]*/g,
  phone_numbers: /(\(\d{3}\)\s*|\d{3}[\s.-]?)\d{3}[\s.-]?\d{4}/g,
  credit_card_numbers: /\b\d{4}([ -]?\d{4}){3}\b/g,
  hashtags: /#\w+/g
};

// Function to extract data from user input and display results
function extractDataFromInput(event) {
  event.preventDefault(); // Prevent form from submitting/reloading

  const inputText = document.getElementById('userInput').value;
  let results = '';

  // Extract and display each pattern
  for (const [key, regex] of Object.entries(patterns)) {
    const matches = inputText.match(regex);
    results += `<h3>${key.replace(/_/g, ' ').toUpperCase()}</h3>`;
    if (matches && matches.length > 0) {
      results += '<ul>';
      matches.forEach(match => {
        results += `<li>${match}</li>`;
      });
      results += '</ul>';
    } else {
      results += '<p>No matches found.</p>';
    }
  }

  // Show results in the page
  let resultsDiv = document.getElementById('results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'results';
    document.body.appendChild(resultsDiv);
  }
  resultsDiv.innerHTML = results;
}

// Attach event listener to the form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', extractDataFromInput);
});