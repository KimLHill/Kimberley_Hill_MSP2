// I followed this tutorial from https://simplestepscode.com/javascript-quiz-tutorial/ to get the basic javascript code for my quiz, then added my own information and styled to improve the appearance and add more answer options. 

// Questions, answer options and correct answer for triathlon quiz
var myQuestions = [
	{
		question: "What is the correct order of a triathlon?",
		answers: {
			a: 'Swim, bike, run',
			b: 'Bike, swim, run',
            c: 'Run, swim bike',
            d: 'Bike, run, swim'
		},
		correctAnswer: 'a'
	},
	{
		question: "An aquathlon consists of?",
		answers: {
			a: 'Bike and run',
			b: 'Swim and bike',
            c: 'Swim and run',
            d: 'Swim only'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// Initialise quiz
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    // Display the questions
	function showQuestions(questions, quizContainer){
	var output = [];
	var answers;

	// Run the full list of questions
	for(var i=0; i<questions.length; i++){
		
		// Reset to the list of answers
		answers = [];

		// Get the answer options for each question
		for(letter in questions[i].answers){

			// Add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// Push question and it's answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// Combine output list into a string
	quizContainer.innerHTML = output.join('');
}

    // Display the questions
    showQuestions(questions, quizContainer);

    //Display the results
	function showResults(questions, quizContainer, resultsContainer){
	
	// Get answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// Keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	for(var i=0; i<questions.length; i++){
		// Find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		// If answer is correct, add to correct score total and colour green
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		}
		// Else colour the answer red if incorrect
		else{
			answerContainers[i].style.color = 'red';
		}
	}

	// Show number of correct answers out of total number of questions
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

	// Show results on user click of submit button
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);