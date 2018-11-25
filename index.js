// add solution here
function theBeatlesPlay(musicians, instruments){
  let newStr = "";
  let finArr = [];
  for(let i = 0; i < musicians.length; i++){
      newStr +=  musicians[i] + " plays " + "" + instruments[i] + " ' " + ",";
      
  }
    finArr.push(newStr);
    return finArr;
}