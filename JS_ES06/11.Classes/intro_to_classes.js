// Class
// 멋진 Object
// 코드를 구성하는데 도움을 준다.
// 엄청 많은 코드를 구조화 할때 유용

// Class는 blueprint이다.
// Bluepring(청사진) => 즉 설계도

const baseObject = {
    username : "Nicolas",
    sayHello: function() {
        console.log("I'm Nicolas");
    }
}

class User {
    constructor() {
        this.username = "Nicolas"
    }
    sayHello() {
        console.log("Hello, I'm Nicolas");
    }
}

// 이렇게 생성할 수 없음
// class를 생성해줘야 한다.
console.log(User.username);

// instance 선언
const sexyUser = new User();

console.log(sexyUser.username);
setTimeout(sexyUser.sayHello, 4000);

// 인스턴스를 여러개 생성할 수 있다.
const uglyUser = new User();


// object가 있는데 왜 class를 사용해야 하는가?
// 인스턴스마다 다른 속성을 가질 수 있게 해주기 때문이다.

class User {
    constructor(name) {
        this.username = name
    }
    sayHello() {
        console.log("Hello, I'm " + this.username);
    }
}

const sexyUser = new User("Boem");
const uglyUser = new User("Nicolas");