function result() {
  var shoeSize= document.getElementById('shoeSize').value;
  var yearOfBirth= document.getElementById('yearOfBirth').value;
  if (isNaN(shoeSize)==false && isNaN(yearOfBirth)==false && yearOfBirth !=0 && shoeSize !=0){
    var result= shoeSize*2;
    result+=5;
    result*=50;
    result-=yearOfBirth;
    result+=1766;
    alert('Mon quotient de ces deux nombres est : '+ result);
  }
  else {
    alert('erreur,ceci n\'est pas un nombre');
  }
}
