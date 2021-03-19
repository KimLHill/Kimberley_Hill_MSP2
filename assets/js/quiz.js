/*jshint esversion: 6 */ /*Comment sourced from https://stackoverflow.com/questions/37247474/es6-in-jshint-jshintrc-has-esversion-but-still-getting-warning-using-atom to solve JSHint warnings about e6 */

/* Start results at 0 and total number of questions to 10 */
let results = 0;
let total = 10;

/* Runs function when page is ready */
$(document).ready(function(){

    /* Change background colour of answer buttons depending on whether selected answer is correct or incorrect */
    $('.quiz-btn').click(function() {
        if ($(this).hasClass('true')) {
            $(this).addClass('correct');
        } else {
            $(this).addClass('incorrect');
        }
    });

     /* Removes other quiz answer options once user has selected an option */
     $('.quiz-btn').click(function(){
        $(this).siblings().fadeOut('300');
    });

    /* Increases result score by one point if selected answer is correct */
    $('.true').one('click', function() {
        results ++;
    });

    /* Show results on user clicking 'Get my score' button */
    $('#show-results').click(function(){
        $('.hide-display').show();
        $('.results-btn').show();
        $('#results').text('Your score is: ' + results + ' out of ' + total);
    });

    /* Refresh quiz when user clicks 'Try Again' button */
    $('#refresh').click(function(){
        location.href=location.href;
    });

});
