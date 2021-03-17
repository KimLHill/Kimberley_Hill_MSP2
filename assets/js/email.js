/* Send Email using EmailJS with form paramaters from sign up form */
/* Followed the Code Institute Tutorial to create this Javascript code https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/ */
function sendMail(contactForm) {
    emailjs.send("gmail","GwentTriathlonClub", {
            "from_name": contactForm.firstname.value,
            "from_email": contactForm.emailaddress.value,
            "reason_for_joining": contactForm.reasonforjoining.value
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

/* Alert box to thank user for the form submission */
$('#form-submitted').click(function(){
    alert("Thank you for submitting the membership form.\n\nOur club secretary will respond to you within the next 48hrs with our training calendar and arrange for you to come and try 2 free sessions.\n\nWe look forward to meeting you soon!")
});