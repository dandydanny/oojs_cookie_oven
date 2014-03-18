// $( document ).ready(function() {
  // Your JavaScript here
  console.log("JS ready!");


  //////// MODEL

  // cookie prototype
  // name
  // req. bake time
  // accumulated bake time
  // fn to increment accumulated bake time


  var Cookie = function(name, bakeTime){
    this.bakeTime = bakeTime;
    this.name = name;
    this.state = "raw";
    this.timeBaked = 0;
  }

  Cookie.prototype.bakeOneMin = function(){
    this.timeBaked += 1;
    this.setStatus();
  }

  Cookie.prototype.setStatus = function(){
    if(0 < this.timeBaked){
      this.state = "still gooey";
    };
    if(this.timeBaked === this.bakeTime){
      this.state = "just right";
    };
    if(this.timeBaked > this.bakeTime){
      this.state = "crispy";
    };
  }

  function Oven() {
    this.slots = 3;
    this.contents = []
  }

  Oven.prototype.isFull = function(){
    if(this.contents.length === this.slots){
      // don't put it in oven
    } else {
      // put it in oven
    };
  };

  Oven.prototype.bakeOneMin = function(){}



  /////////// VIEW

  // Replace DOM elements


  /////////// Controller

  // takes input (name, time, button press)

  // $( "#new_batch" ).on( "submit", function() {
  //   event.preventDefault();
  //   console.log("Submitting form...")
  // // do some shit
  // });

  // $( "#bake" ).on( "click", function() {
  //   console.log("Bake for 1 more minute")
  // // do some shit
  // });

  // $( "#message" ).append( "Welcome to The Fantastic Cookie Baking Machine" )

// });
