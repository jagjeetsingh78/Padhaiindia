document.querySelector('.search-icon').addEventListener('click', () => {
    // Add search functionality here
  });
  
  document.querySelector('.user-icon').addEventListener('click', () => {
    // Add user functionality here
  });
  
  document.querySelector('.nav-links').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      document.querySelector('.nav-links').classList.toggle('active');
    }
  });

function askQuestion() {
	const input = document.getElementById("input");
	const output = document.getElementById("output");

	// Here you would typically call the API of your AI assistant to get the answer
	// For the sake of this example, let's just generate a random answer
	const answers = [
		"I'm sorry, I'm still learning. Can you please provide more context?",
		"That's an interesting question! Let me think for a moment...",
		"I'm afraid I don't have enough information to provide a accurate answer. Can you provide more details?",
		"Sure, I can help with that! The concept you're looking for is...",
		"Great question! Here's a simplified explanation...",
	];
	const answer = answers[Math.floor(Math.random() * answers.length)];

	output.textContent = answer;
	input.value = "";
}