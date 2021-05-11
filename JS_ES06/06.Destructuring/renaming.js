const settings = {
    color: {
        chosen_color: "dark"
    }
};

const {
    color: {chosen_color = "light"}
} = settings;

// chosen_color 변수명을 쓰고 싶지 않아!
// chosenColor로 쓰고 싶어!!
console.log(chosen_color);


// renaming

// 좀 별로인 방법...
const chosenColor = settings.color.chosen_color || "light";

// 1. 세련된 방법
const {
    color: {chosen_color : chosenColor = "light"}
} = settings;

console.log(chosenColor);

// 2. 변수에 직접 집어넣기
let chosenColor = "blue";

// 새 변수를 생성하는 대신...
({
    color: {chosen_color : chosenColor = "light"}
} = settings);

console.log(chosenColor);
