
function theBeatlesPlay(musicians, instruments){
  var music = [];
  for (var i= 0; i < musicians.length;i++){
    music.push(musicians[i] + " plays " + instruments[i]); 
  }
  return music;
}
function johnLennonFacts(facts){
  var y =0;
  while(y<facts.length){
    facts+="!!!";
    y++
  }
}