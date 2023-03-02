const names = [];
function writeCards(name){
    for (let i = 0; i < name.length; i++){
       names.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return names;
}
function countDown(number){
    while (number>-1){
        console.log(number--);
    }
}