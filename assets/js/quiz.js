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

     /* Fades out other quiz answer options once user has selected an option */
     $('.quiz-btn').click(function(){
        $(this).siblings().fadeOut('300');
    });


    /* Increases result by one point if answer was correct */
    $('.true').one('click', function() {
        results ++;
    });

    /* Show results on user clicking 'Get my score' button */
    $('#show-results').click(function(){
        $('.hide-display').show();
        $('.results-btn').show();
        $('#results').text('Your score is: ' + results + ' out of ' + total);
    });

    /* Refresh quiz */
    $('#refresh').click(function(){
        location.href=location.href;
    });

});
