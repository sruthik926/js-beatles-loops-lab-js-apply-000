// add solution here
function theBeatlesPlay(musicians, instruments){
  let newStr = "";
  let emptyArr = [];
  for(let i = 0; i < musicians.length; i++){
      newStr += musicians[i] + "plays" + instruments[i];
      newStr.push(emptyArr);
  }
    return emptyArr;
}