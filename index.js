// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(name, eventName){
    const thankMessage = []
    for (let n = 0; n < name.length; n++){
        let newArray = `Thank you, ${name[n]}, for the wonderful ${eventName} gift!`;
        thankMessage.push(newArray)
        
    }
    return thankMessage
}
writeCards(names, 'surprise')


function countDown(down){
    let num = 0;
    while (num <= down) {
        console.log(down--);
        // num--
    }
}
countDown(10)