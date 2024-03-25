// Code your solution here
// returns an array of matching names
function findMatching(driverArray, driverName){
    const matchingNames = driverArray.filter(function (repeatingName){
        return repeatingName.toLowerCase() === driverName.toLowerCase();
    })
    return matchingNames;
}

//retuns an array of matching starting chars
function fuzzyMatch(driverArray, nameChar){
    const topDrivers = driverArray.filter(function (sortDriver){
        return sortDriver[0].toLowerCase() === nameChar[0].toLowerCase();
    })
    return topDrivers
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//returns an array with matching key value names
function matchName(driverArray, string){
    const output = driverArray.filter(function (objname) {
        return objname["name"] === string;
    })
    return output;
}

