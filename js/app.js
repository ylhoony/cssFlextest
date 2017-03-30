console.log('app.js loaded');

$(() => {

  $('.menu-bar').click(() => {
    alert('this is test');
  });

  $('.nav-demand').click(() => {
    let $demandDropdown = $('<ul>');

    $(this).append($demandDropdown);
    // $($dropdownUl).append('li')
  });


})