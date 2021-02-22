// All custom.js

// Pseudocode Steps
// 1. Set a click event on the mobile menu icon
// 2. Once clicked demonstrate jQuery chaining
// 3. Finally demonstrate jQuery callback functions

// Waits until document is up and ready
$('document').ready(function(){

  // Select the mobile menu icon, add a click event, trigger an alert
  $('.fa-bars').click(function() {

    // chaining
    // $('.daily-section').hide(3000).show(3000);

    //callback function pattern
    $('.daily-section').slideUp(2000, function(){
      $('.map-section').slideUp(1500, function(){
        $('.fav-section').slideUp(1500, function(){
          $('.footer-section').slideUp(500);
        });
      });
    });





  });
  //end of menu function

});
// Document ready ENDS
