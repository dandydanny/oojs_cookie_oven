describe("Cookie", function(){
  var cookie;

  it("should always pass", function(){
    expect(5).toEqual(5);
  });

  beforeEach(function(){
    cookie = new Cookie("chocolate chip", 10);
  });

  it("should have a name", function(){
    expect(cookie.name).toEqual("chocolate chip");
  });

  it("should have a bake time", function(){
    expect(cookie.bakeTime).toEqual(10);
  });

  it("timeBaked should initialize to 0", function(){
    expect(cookie.timeBaked).toEqual(0);
  });

  it("should be initialized with a state of raw", function(){
    expect(cookie.state).toEqual("raw");
  });

  it("should increment timeBaked when bakeOneMin is invoked", function(){
    cookie.bakeOneMin();
    expect(cookie.timeBaked).toEqual(1);
  });

  it("should still be gooey after only baking for 1 min", function(){
    cookie.bakeOneMin();
    expect(cookie.state).toEqual("still gooey");
  });

});




// describe("Oven", function(){

// });





// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
