/* Learnt how to create a modal with the help of this tutorial https://www.w3schools.com/howto/howto_css_modals.asp */
/* Then added my own code to call the modal function but to change the modal text for each button */

/* Call the modal */
var modal = document.getElementById("myModal");

/* Define the buttons that open the modal */
var adultBtn = document.getElementById("individual-adult");

/* Get the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

/* Display the modal with individual-junior text when individual-adult membership button is clicked */
adultBtn.onclick = function() {
  modal.style.display = "block";
  $(".modal-content p").text("Adult");
}

/* When user clicks on close cross button, close the modal */
span.onclick = function() {
  modal.style.display = "none";
}

/* If user clicks anywhere outside of the modal, close the modal */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Alert box for Individual Junior membership info */
$('#individual-junior').click(function(){
    alert("Our Individual Junior membership costs just £240 per year (£20 per month) which includes all club junior training activities with coaching and all the membership benefits.\n\nPlease note: We must receive parent or guardian consent before you can become a member.\n\nPlease note: Juniors can ONLY attend our club training marked JUNIORS WELCOME.")
});

/* Alert box for Individual Adult membership info */
$('#individual-adult').click(function(){
    alert("Our Individual Adult membership costs just £720 per year (£60 per month) which includes all club training activities with coaching and all the membership benefits.")
});

/* Alert box for Individual Senior membership info */
$('#individual-senior').click(function(){
    alert("Our Individual Senior (60+) membership costs just £660 per year (£55 per month) which includes all club training activities with coaching and all the membership benefits.\n\nPlease note: We must have a medical note signed by your doctor before you can become a member.")
});

/* Alert box for Couple Adult membership info */
$('#couple-adult').click(function(){
    alert("Our Adult Couple membership costs just £1200 per year (£100 per month) which includes all club training activities with coaching and all the membership benefits.\n\nPlease note: both adults must be aged between 18-59.")
});

/* Alert box for Family membership info */
$('#family').click(function(){
    alert("Our Family membership costs just £1560 per year (£130 per month) which includes all club training activities with coaching and all the membership benefits.\n\nPlease note: both adults must be aged between 18-59 and both juniors aged under 18.\n\nPlease note: Juniors can ONLY attend our club training marked JUNIORS WELCOME.")
});