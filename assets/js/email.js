/* Followed this Code Institute tutorial to create this code https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/ */
/* Send contents of sign-up form to my email address */
function sendMail(contactForm) {
    emailjs.send("service_dkgmmc6", "template_0nelh0b", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
    },
        function(error) {
            console.log("FAILED", error);
        }
    );

    /* To block from loading a new page */
    return false;  
    }

