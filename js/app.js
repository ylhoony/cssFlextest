console.log('app.js loaded');

$(() => {

  // $('.menu-bar').on('click', () => {
  //   alert('this is test x');
  // });

  // $('.nav-demand').on('mouseenter', function() {
  //   $('.nav-demand-ul').css('display','unset');
  // });
  // $('.nav-demand').on('mouseleave', function() {
  //   $('.nav-demand-ul').css('display','none');
  // });

  $('.fa-caret-down').on('click', () => {

  })


})


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("menu-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}