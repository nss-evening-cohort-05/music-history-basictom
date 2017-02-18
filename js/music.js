// console.log("hello");
// 1. Each student must add one song to the beginning and the end of the array.
// 1. Loop over the array and remove any words or characters that obviously don't belong.
// 1. Students must find and replace the > character in each item with a - character.
// 1. Must add each string to the DOM in index.html in the main content area.

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("White and Nerdy > by Weird Al Yankovich on the album Straight Outta Lynwood");
songs.push("Love Shack > by The B52's *@(! on the album Cosmic Thing");

function findAndReplace(){
  for(var i=0; i<songs.length; i++){
    var newSongs = songs[i].replace(/[>]/g, "-").replace(/[!,*,@,(]/g, "");
    var trackName = document.getElementById("track-container");
    trackName.innerHTML += "<div>" + newSongs + "</div>";
    // console.log(newSongs);
  }
}

findAndReplace(songs);
