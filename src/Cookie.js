myVariable = "okay";

  //////// MODEL

 function Cookie(name, bakeTime) {
    this.bakeTime = bakeTime;
    this.name = name;
    this.state = "raw";
    this.timeBaked = 0;
  }

  Cookie.prototype.bakeOneMin = function(){
    this.timeBaked++;
  }

  Cookie.prototype.checkStatus = function(){
    if(this.timeBaked === 0){
      this.state = "raw";
    };
    if(0 < this.timeBaked < this.bakeTime){
      this.state = "still gooey"
    };
    if(this.timeBaked === this.bakeTime){
      this.state = "just right"
    };
    if(this.timeBaked > this.bakeTime){
      this.state = "crispy"
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
    }
  }

  Oven.prototype.bakeOneMin = function(){}

  // class Cookie
    // def initialize(name, bake_time)
    //   @name = name
    //   @bake_time = bake_time
    //   @state = "raw"
    //   @time_baked = 0
    // end
    // def bake_one_min
    //   @time_baked += 1
    // end
  // end

  // oven prototype
  // (holds cookies?)
  // ability to increment accumulated bake time in cookies


  /////////// VIEW

  // Replace DOM elements


  /////////// Controller

  // takes input (name, time, button press)
