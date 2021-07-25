function superbowlWin(record){
    const foundSeason = record.find(function(season){
        return season.result === "W"
    })
    if(foundSeason){
        return foundSeason.year
    }
}



//The function should receive 1 argument, an Array of JavaScript Objects
//Each object has two properties: year and result
//It should use find() to test each Object to see if the result is "W" — a win!
//It should return the year when the win occurred (if it occurred at all!)
//If no win is found, it should return, sadly, undefined

//returns a year the KC Chiefs won the superbowl
//returns undefined if the record has no win objects