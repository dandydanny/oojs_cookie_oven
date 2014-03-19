$( document ).ready(function() {
  // Your JavaScript here
  console.log("JS ready!");

  oven = new Oven();

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
      this.state = "still_gooey";
    };
    if(this.timeBaked == this.bakeTime){
      this.state = "just_right";
    };
    if(this.timeBaked > this.bakeTime){
      this.state = "crispy";
    };
  }

  function Oven() {
    this.racks = 3;
    this.contents = []
  }

  Oven.prototype.isFull = function(){
    return this.contents.length === this.racks
  };

  Cookie.prototype.putInOven = function(oven){
    console.log("in function")
    console.log(oven)
    if(oven.isFull()){
      $("#status").text("No room for more cookies!  This oven is FULL.")
      return "oven is full"
    } else {
      console.log("yay not full")
      console.log(this);
      oven.contents.push(this);
      console.log(oven.contents)
    }
  }

  Oven.prototype.bakeCookies = function(){
    console.log("baking!");
    this.contents.forEach(function(cookie) {
      cookie.bakeOneMin();
    });
    updateTable(this);
  }



  /////////// VIEW

  // Replace DOM elements


  /////////// Controller

  // takes input (name, time, button press)

  function updateTable(oven){
    console.log("updating DOM");
    oven.contents.forEach(function(cookie, index) {
      state = cookie.state;
      $("#rack_" + index).addClass(state);
      $("#rack_" + index).text(cookie.name);
      console.log(state);
      console.log(index);
    })
  }


  $( "#new_batch" ).on( "submit", function() {
    event.preventDefault();
    var name = $("input[name='batch_type']").val();
    var bakeTime = $("input[name='bake_time']").val();
    console.log(name);
    console.log(bakeTime);
    cookie = new Cookie(name, bakeTime);
    this.reset();
    console.log(cookie);
    cookie.putInOven(oven);
    updateTable(oven);
  });

  $( "#bake" ).on( "click", function() {
    console.log("Bake for 1 more minute")
    oven.bakeCookies();
  });

  $( "#message" ).append( "Welcome to The Fantastic Cookie Baking Machine" )

});
