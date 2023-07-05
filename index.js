const cats = [
    'Milo', 
    'Otis', 
    'Garfield'
];
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}
function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}
function appendCat(name){
    const newArray = cats.slice();
    newArray.push(name)
    return newArray
}
function prependCat(name){
    const newArray = cats.slice();
    newArray.unshift(name)
    return newArray
}
function removeLastCat(){
    const newArray = cats.slice();
    newArray.pop('Garfield')
    return newArray
}
function removeFirstCat(){
    const newArray = cats.slice();
    newArray.shift('Milo')
    return newArray
}