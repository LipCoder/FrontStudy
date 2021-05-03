const friends = ["nico", "lynn", "dal", "mark"];

// .of()
const friends = Array.of("nico", "lynn", "dal", "mark");
console.log(friends);


// .from()
const buttons = document.getElementsByClassName("button");

// Array가 아님
buttons.forEach(button => {
    button.addEventLIstener("click", () => {});
});

// Array-like
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        console.log("I ve been clicked");
    });
});