// normal
function nameOf(arg) {

}

const func = function(arg) {

}
//#endregion

const names = ["nico", "lynn", "flynn"];

const hearts = names.map(function(item){
    return item + "♥";
});

console.log(hearts);
//#endregion

const names = ["nico", "lynn", "flynn"];

function addHeart(item) {
    return item + "♥";
}

const hearts = names.map(addHeart);

console.log(hearts);
//#endregion


// arrowFunction 
const names = ["nico", "lynn", "flynn"];

const hearts = names.map((item, index) => item + " ♥ " + index);

console.log(hearts);