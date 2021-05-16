class User {
    constructor({username, lastName, email, password}) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello() {
        console.log("Hello, I'm " + this.username);
    }
    getProfile() {
        console.log(`${this.username} ${this.email} ${this.password}`);
    }
    updatePassword(newPassword, currentPassword) {
        if(currentPassword === this.password) {
            this.password = newPassword;
        } else {
            console.log("Can't change password.");
        }
    }
}

const sexyUser = new User({
    username: "Kim", 
    lastName: "boem", 
    email: "sb9212@gmail.com",
    password: "qwe123"
});

// super
// super는 부모 클래스이다. (User)
class Admin extends User {
    constructor({username, lastName, email, password, superAdmin, isActive}) {
        super({username, lastName, email, password});
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite() {
        console.log("Delete the whole website...");
    }
}

const admin = new Admin(
    {
        username: "Kim", 
        lastName: "boem", 
        email: "sb9212@gmail.com",
        password: "qwe123",
        superAdmin: true,
        isActive: true
    });
//#endregion


class Counter {
    constructor({ initialNumber = 0, counterId, plusId, minusId}) {
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.counter.innerText = initialNumber;
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();
    }
    addEventListeners() {
        //this.plusId.addEventListener("click", this.increase);
        //this.minusBtn.addEventListener("click", this.decrease);

        this.plusId.addEventListener("click", this.increase_arrow);
        this.minusBtn.addEventListener("click", this.decrease_arrow);

    }
    increase() {
        // 주의: this는 HTMLButtonElement 이다 
        // 호출된 것을 기준으로 this가 잡히기 때문이다.
        this.count = this.count + 1;
        this.repaintCount();
    }
    decrease() {
        // 주의: this는 HTMLButtonElement 이다 
        this.count = this.count - 1;
        this.repaintCount();
    }
    repaintCount() {
        this.counter.innerHTML = this.count;
    }
    // arrow function을 사용하면
    // 항상 this는 class를 가리킨다.
    increase_arrow = () => {
        this.count = this.count - 1;
        this.repaintCount();
    }
    decrease_arrow = () => {
        this.count = this.count + 1;
        this.repaintCount();
    }
    repaintCount_arrow = () => {
        this.counter.innerHTML = this.count;
    }
}

new Counter({counterId: "count", plusId: "add", minusId: "minus"});