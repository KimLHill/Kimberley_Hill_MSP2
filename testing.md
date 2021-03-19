# **Testing**

## **User Stories**
I tested the user stories based on the users outlined in the User Stories section of my README.md file.

1. **User 1** - I am a local triathlete, I want to know what membership price I would have to pay if I was to join the Gwent Triathlon Club.

This user can find the membership price information through one click on the navbar Membership tab, scrolling down to the Membership Options & Price sections and clicking on the button of the membership package suitable to them. There are 5 simple options, providing a straight-forward decision for the user. On clicking the package button, a modal appears telling them the price information and other relevant information about that package. Alongside the package options is the GTC Membership Benefits section so the suer can easily see the long list of benefits of being a member and can easily see what they get for the membership price.

2. **User 2** - I am the club secretary at Gwent Triathlon Club, I want a simple way for new members to contact me so that I can invite them along to a free trial session.

This user gets automatically contacted via email when a new member completes and submits the sign-up form providing a simple way for the club secretary to get new member’s details. The form allows the user to ask questions that the club secretary may need to address. New members can access the form from anywhere on the website using the ‘join us’ buttons or via one click on the navbar join tab. An automated email to the new member explains the next step so the club secretary doesn’t have to replay instantly to emails. There is also a contact email for new members to contact the club secretary provided on the join page.

3. **User 3** - I am the manager of a leisure centre in Gwent, I want to know where the local triathlon club currently train and find their contact details, so that I can invite them to rent my sports facilities like the swimming pool and running track.

This user can find the training locations that the club currently uses via one click on the navbar using the Training tab. Alternatively, from the home page, this user can click on the ‘training locations’ button. It also lists the types of training the club uses like indoor pools and indoor running tracks, so this user can see if the club may be interested in renting his facilities. This user can find the email address to contact the club on the join page. Alternatively, this user could submit the sign-up form with his name, email address and use the text box to write his message offering his facilities as another way to contact the club. This way this user would also get email confirmation that the club have received his message.

4. **User 4** - I am the chair of Gwent Triathlon Club, I want a website that highlights what we do and the benefits of joining us, so that I attract new members to the club.

This user’s needs are met by the many design features that have been careful thought through and implemented to appeal to the triathlon community to attract new members. Hero images of triathlon, triathlon icons in the logo, text content about the club on the home page, a GTC membership benefits section on the membership page, an interactive quiz to learn about triathlon etc. It helps to attract new members by having regular nudges through buttons and callouts to get visitors to the website to go to the sign-up form, to hopefully attract new members to this user’s club.

5. ** User 5** - I am a local person who wants to start duathlon, I want to know if I can join the club without be expected to join in swim training and if the club is suitable for beginners, so that I can decide if I want to join.

This user can access the information about joining the club as a duathlete through once click on the navbar join tab and scrolling to the FAQs section where it answers this question. Across the website it refers to the disciplines of swim, bike & run rather than exclusively saying ‘triathlon’. Also, on the interactive quiz it references duathlon in one of the questions, implying this is something the club does. On the home page, one of the first things this user will see, it says all abilities welcome. Again in the FAQs section it says the accommodate all fitness levels, from beginners to elite racers and covering all race distances.

6. **User 6** - I am a person who is new to sport and fitness, I want to know what triathlon is and what it involves, so that I can decide if I want to give it a go.

This user can find out this information by taking the triathlon quiz via once click on the navbar triathlon tab. The quiz helps this user to learn about triathlon from the basics through to more specific questions. The FAQs section helps to answer questions this user may have and contact details within this section provide a simple way for this user to contact the club to discuss anything further.

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

## **Manual Testing**
The following manual tests were carried out on both Google Chrome and Mozilla Firefox:
    * Social media links were clicked on to make sure that they open in a new tab at the correct corresponding landing page.
    * Contact email address link opens up a new tab to an email service.
    * Navbar items were clicked on from each page to make sure that they navigate to the correct page and that they are correctly shown as 'active' when selected.
    * All buttons and links were clicked on to check that they take the user to the correct page.
    * Map markers display the info window with correct location information when clicked.
    * The sign-up 'submit form' button only accepts the form when it has been completed with all required fields filled in.
    * Clicking on the logo in the menu bar returns the user back to the home page.
    * The quiz buttons change colour corectly to show correct or incorrect answer selected. Also the other possible answers disappear when an answer has been selected.
    * The quiz 'get my score' button correctly shows the users score.
    * The quiz 'try again' button refreshes the quiz and returns them to the top of the page.
    * The membership package buttons display the modal with corresponding correct information when clicked.

### **Testing Compatibility With Browsers**
I manually tested the website on Google Chrome and Mozilla Firefox browsers. I checked that buttons, links, the form inputs, responsiveness and design worked as planned.

### **Testing Compatibility With Different Devices**
I manually tested the website on a mobile and desktop device. I sent the link for my deployed website to family, who also checked the website on their devices. The website worked for the a variety of mobile, tablet (iPad) and desktop devices.

### **Testing Quiz**
As a user, I completed the quiz to ensure the quiz was interactive. The quiz worked as designed.
![Testing-quiz](https://user-images.githubusercontent.com/74603013/111750024-9022db80-888a-11eb-8379-d1f0c775b73d.jpg)

### **Testing Sign-up Form**
As a user, I tried to submit the form without completing all the form field inputs and received the follow error message and the form wouldn't submit. This worked correctly as intended.
![Testing-checking-user-completes-form](https://user-images.githubusercontent.com/74603013/111747285-0cb3bb00-8887-11eb-8657-2473816ca4da.jpg)

As a user, I received the following confirmation email in the inbox of the email address I had inputted into the sign-up form. This worked as intended.
![Testing-user-email-confirmation-screenshot](https://user-images.githubusercontent.com/74603013/111744198-bf354f00-8882-11eb-9505-a4ad0901e1a2.jpg)

I received the following email to my inbox as the club sectretary, containing all the form inputs. This worked correctly as intended.
![Testing-signup-form-details-received-to-club-email-inbox](https://user-images.githubusercontent.com/74603013/111746887-86977480-8886-11eb-85a5-0c7c7f88094a.jpg)

## **Bugs Found In Testing**
The following differences were found when the website was deployed live:
* On Mozilla Firefox, if the user presses the submit button on the sign-up form then the user is prompted with a message to complete the fields and the empty form fields were also highighted with a red border to further aid the user in completing the form correctly. However on Google Chrome only the prompt message was displayed, the borders of the input fields remained unchanged.
* On clicking the 'join us' button in the callout message on any page took the user to the top of the Join page, not directly to the form as intended. I changed the id of the href to direct the user to the form.
* On trying to submit the sign-up form without a valid email address (e.g. no @gmail.com) then the user could still submit the form because the validation was checking only that the email field was completed, not checking for a valid email address.
* There is a bug showing a small white margin to the right-hand side of the website. However, it is not visible on any of the browsers or devices tested nor visible when inspecting the website reposnsiveness via the browser. I noticed the bug only when taking a full-width screenshot. 

## **Features Still To Implement**
The following points were found during testing that need to be rectified in the future to make the wesbite work better for all users (inc. the club).

* When as a user I submitted an email address that doesn't actually exist, the form could still be submitted to the club and an email arrived in my inbox. However, as the user email confirmation email failed to be successfully delivered to the user's inbox (because it didn't exist) I received an email to let me know. 
![Testing-user-invalid-email](https://user-images.githubusercontent.com/74603013/111745455-84341b00-8884-11eb-9a73-511b697c848d.jpg)
However this isn't very useful to the club secretary, as she has no other means of contacting the new member who tried to sign up. In the future I will also add a phone number input field to the form, so if the user makes an error and inputs a non-existent email address, then the club can contact them via an alternative method.