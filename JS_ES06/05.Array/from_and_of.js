const friends = ["nico", "lynn", "dal", "mark"];

// .of()
const friends = Array.of("nico", "lynn", "dal", "mark");
console.log(friends);


// .from()
const buttons = document.getElementsByClassName("button");

// Array가 아님
// Array-like
// HTMLCollection
buttons.forEach(button => {
    button.addEventLIstener("click", () => {});
});

// from을 사용하여 Array로 변환
// Create an array from an array-like object
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        console.log("I ve been clicked");
    });
});