# **Testing**

## **User Stories**

## **HTML Validation**
I passed all my html code through the [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input).

1. **Index.html**
No errors or warnings. Validation passed.

2. **Training.html**
    * I was shown one warning saying: "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections". This related to a an opening and closing section tag that contained no code. I removed this empty section and this fixed the problem.
    
    Fixed the warning and the validation passed.

3. **Membership.html**
No errors or warnings. Validation passed.

4. **Triathlon.html**
    * I was shown a warning saying: "Consider using the h1 element as a top-level heading only". This related to a h1 element used to style the score results on completing the quiz. I changed this to a h2 element and this fixed the error.
    * I was shown a warning saying: "Empty heading". This related to the same heading as had caused the above warning. However, this heading is deliberately empty and is populated with text by a function in the quiz.js code when the user clicks on the 'get my score' button. As this was a warning not an error, I chose not to change my code.

    Fixed the one warning and the validation passed (with the exception of the one warning for the reason described above).

5. **Join.html**
    * I was shown two warnings that I did not need to include the type="text/javascript" in my script tags to my local JavaScript email.js file. However as this was source code that I copied directly from the installation document from EmailJS, I decided to keep it in my code to ensure the email function works correctly.
    * I received three error messages all saying: "The value of the for attribute of the label element must be the ID of a non-hidden form control". This related the to the three labels I had used on the sign-up form. I rectified this error by changing the for attributes to match the corresponding element IDs.

    Fixed the errors and the validation passed (with the exception of the two warnings for the reason described above).

## **CSS Validation**
I passed all my html code through the [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/#validate_by_input).

* I was shown two errors that both saying: "Value error: margin-top:0 is not a margin-top value". These related to the .membership-benefits and .membership-options classes. I removed the margin-top css code and this fixed the erros.

    Fixed the errors and the validation passed

## **Javascript Validation**
I passed all my javascript through [JSHint](https://jshint.com/)

1. **Email.js**
No errors or warnings. Validation passed.

2. **Maps.js**
    * I was shown seven warnings:
        1. 4 warnings related to 'Eversion 6'. I researched this and found this [post](https://stackoverflow.com/questions/37247474/es6-in-jshint-jshintrc-has-esversion-but-still-getting-warning-using-atom) giving this comment /*jshint esversion: 6 */ to add to the top of the javascript code to reswolve the warnings.
        2. 2 warnings for missing semicolons. I added the semicolons to my code and this fixed the error.
        3. 1 warning saying: "functions declared within loops referencing an outer scoped loop may lead to confusing semantics". This related to the closeOtherInfo function and InfoObj array in the code for the info window pop up. The positioning of this code was the same in other examples I could find and trying to re-arrange my code didn't resolve the issue. This remains an current problem and is still presenting this warning. This is a learning point for me and I will look to resolve this in the future.
            * Whilst not warnings, JSHint also identified google as an undefined varibale and initMap as an unused varibale. These were taken directly from the [Google Maps API documentation](https://developers.google.com/maps/documentation/javascript/adding-a-google-map) used to initialise the map and I therefore chose not to change the code.

            When I made the above changes, (with the exception of the one warning for the reason mentioned above) the validation passed.

3. **Membership-packages.js**
    * I was shown 7 warnings all saying: "missing semicolons". I had missed the semicolons from the end of each function. I added the seven semicolons and this fixed the warning.

        When I made the above changes, the validation passed.

4. **quiz.js**
    * I was shown 2 warnings related to 'Eversion 6'. Like with the map.js file, I added the comment /*jshint esversion: 6 */ to the top of my code and this fixed the error.

        When I made the above changes, the validation passed.

5. **Sticky-navbar.js**
No errors or warnings. Validation passed.

##**Testing Compatibility With Browsers**
I manually tested the website on Google Chrome and Mozilla Firefox browsers. I checked that buttons, links, the form inputs, responsiveness and design worked as planned.

###**Manual Testing**
The following manual test were carried out on both Google Chrome and Mozilla Firefox:
    * Social media links were clicked on to make sure that they open in a new tab at the correct corresponding landing page.
    * Contact email address link opens up a new tab to email service.
    * Navbar items were clicked on from each page to make sure that they navigate to the correct page and that they are correctly shown as 'active' when selected.
    * All buttons and links were clicked on to check that they take the user to the correct page.
    * The sign-up 'submit form' button only accepts the form when it has been completed with all required fields filled in.
    * Clicking on the logo in the menu bar returns the user back to the home page.
    * The quiz buttons change colour corectly to show correct or incorrect answer selected. Also the other possible answers disappear when an answer has been selected.
    * The quiz 'get my score' button correctly shows the users score.
    * The quiz 'try again' button refreshes the quiz and returns them to the top of the page.

##**Bugs Found In Testing**
    * On Mozilla Firefox, if the user presses the submit button on the sign-up form then the user is prompted with a message to complete the fields and the empty form fields were also highighted with a red border to further aid the user in completing the form correctly. However on Google Chrome only the prompt message was displayed, the borders of the input fields remained unchanged.
    * On clicking the 'join us' button in the callout message on any page took the user to the top of the Join page, not directly to the form as intended. I changed the id of the href to direct the user to the form.
