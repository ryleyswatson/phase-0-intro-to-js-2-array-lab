// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(moreCats){
    return [...cats,"Broom"];
}

function prependCat(evenMoreCats){
    return ["Arnold",...cats]
}

function removeLastCat(oneLessCat){
    return cats.slice(0,cats.length-1)
}

function removeFirstCat(oneLessCatv2){
    return cats.slice(1)
}

