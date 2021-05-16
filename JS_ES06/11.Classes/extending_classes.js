// this
// 클래스 그 자체를 가리킨다.

class User {
    constructor(name, lastName, email, password) {
        this.username = name;
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

const sexyUser = new User("Kim", "boem", "sb9212@gmail.com", "qwe123");
sexyUser.getProfile();

console.log(sexyUser.password);
sexyUser.updatePassword("hello", "qwe123");
console.log(sexyUser.password);



// extends를 사용하여 클래스를 확장(상속)
// User의 클래스 내용을 상속
class Admin extends User {
    constructor(superAdmin) {
        this.superAdmin = superAdmin;
    }
    deleteWebsite() {
        console.log("Delete the whole website...");
    }
}

const sexyAdmin = new Admin("Nicolas", "Serrano", "nico@com", "1234", true);
sexyAdmin.deleteWebsite();
console.log(sexyAdmin.email);