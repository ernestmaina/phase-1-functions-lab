// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
  if (somevalue < 42 ){
    return 42- somevalue;

  }
return somevalue-42;

}

function distanceFromHqInFeet(someValue) {
  const distance= distanceFromHqInBlocks(someValue);
  return distance * 264;

}

function distanceTravelledInFeet(start, destination) {
  if (destination>start){
    return (destination-start)*264;
  }
else if (start>destination){
  return(start-destination)*264;
}
}


function calculatesFarePrice(start, destination) {
  let cost=0;

  if (distanceTravelledInFeet(start, destination)<= 400){
    cost=0;
  }

  else if(distanceTravelledInFeet(start, destination) <=2000 && distanceTravelledInFeet(start, destination) >400){
    cost=(distanceTravelledInFeet(start, destination) -400) * 0.02;
  }
  else if(distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) <2500){
    cost=25;
  }
  else if(distanceTravelledInFeet(start, destination)>2500){
    cost='cannot travel that far';
  }

return cost;

}







