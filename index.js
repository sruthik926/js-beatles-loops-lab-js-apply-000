// add solution here
function theBeatlesPlay(musicians, instruments){
  let newStr = "";
  let musiciansGroup = [];
  for(let i = 0; i < musicians.length; i++){
       musiciansGroup.push(musicians[i] + "plays " + instruments[i]);
      
  }
    
    return musiciansGroup;
}