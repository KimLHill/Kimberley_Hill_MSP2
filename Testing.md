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