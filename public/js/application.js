$( document ).ready(function() {
  // Your JavaScript here
  console.log("JS ready!");

  //////// MODEL

  // cookie prototype
  // name
  // req. bake time
  // accumulated bake time
  // fn to increment accumulated bake time

  // oven prototype
  // (holds cookies?)
  // ability to increment accumulated bake time in cookies


  /////////// VIEW

  // Replace DOM elements


  /////////// Controller

  // takes input (name, time, button press)

  $("#new_batch").on( "submit", function() {
    event.preventDefault();
    console.log("Submitting form...")
  // do some shit
  });

  $("#bake").on( "click", function() {
    console.log("Bake for 1 more minute")
  // do some shit
  });

});
