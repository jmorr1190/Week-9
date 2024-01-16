
const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]; 

const suites = ["diamonds", "hearts", "spades", "clubs"]


class Card { //this is the blue print and when you call a new.card it means go get me a new type of card from this blueprint. 
    constructor(suit, face, value){
        this.suit = suit;
        this.value = value; 
        this.face = face;
    }
}

makeDeck();

function makeDeck(){
    //call the class card since without cards there is no deck. we are going to make a new card within this function with the let x = new Card
    const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]; 
    const suite = ["diamonds", "hearts", "spades", "clubs"];
//let cards = [];
//for (let x = 0; x < faces.length; x++) {
    // x= 0 is going to be the starting place (start), as long as x is less than the values length (how long are you going to do this), x++ is going to show that you are going to show one after another until it returns false (what are you going to do when it is done). This first loop will be the test and then if it returns true then the next loop will run.  
//for (let y = 0; y < suites.length; y++) {
    //let card = new Card(suites[y], faces[x], x + 2); //this is where we give the suites and the face a value in order to show who wins the hand
    //card.push(card); here we are taking a new card and adding it into the array. For this part I need to add in the shuffle function. 
    //console.log(card);
for (let suite of suites) {
    for (let face of faces) {
        let card = new Card(suite, face)
        cards.push(card);
    }
}
}
    //console.log(x);
    //console.log(values[x],suites[y]); //by putting the x and y in brackets with the const that will give us the starting values instead of starting at 0.

for (let i = cards.length - 1; i > 0; i--) { 
    let j = Math.floor(Math.random() * (i + 1)); 
    [res[i], res[j]] = [res[j], res[i]]; 
}

console.log(cards); //this along with the shuffle code should give you 52 cards that are shuffled. 



// every value you need to assign an suit can be done with a double for loop

//https://www.youtube.com/watch?v=b8GF-eiACzs// stopped at 1.20