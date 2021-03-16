// Basic boiklerplate and Javascript code pointers from https://simplestepscode.com/javascript-quiz-tutorial/

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// Triathlon quiz questions and answer options
	}

	function showResults(questions, quizContainer, resultsContainer){
		// Triathlon quiz results
	}

	// Display the questions
	showQuestions(questions, quizContainer);

	// Show results on user click of submit button
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}