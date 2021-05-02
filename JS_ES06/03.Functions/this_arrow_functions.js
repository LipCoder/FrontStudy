const button = document.querySelector("button");


// 이벤트 리스너를 붙이고 이벤트 리스너에 function이 있으면
// JS는 우리가 클릭한 버튼을 this에 넣는다.
button.addEventListener("click", function() {     
    //console.log("i have been clicked");
    console.log(this);
    this.style.backgroundColor = "red";
});

// arrowFunction 사용 불가!!
button.addEventListener("click", () => { 
    console.log(this);
    this.style.backgroundColor = "red";
});

button.addEventListener("click", function() { 
    console.log(this);
    this.style.backgroundColor = "red";
});


const nico = {
    name: "Nico",
    age: 24,
    // 작동 안됨
    addYear: () => {
        this.age++;
    }
};

const nico = {
    name: "Nico",
    age: 24,
    addYear() {
        this.age++;
    }
};

console.log(nico);
nico.addYear();
nico.addYear();
console.log(nico);