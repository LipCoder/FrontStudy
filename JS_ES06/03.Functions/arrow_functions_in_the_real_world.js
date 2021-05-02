const email = ["nco.@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com"];

// .find()
const foundMail = email.find(item => item.includes("@gmail.com"));

console.log(foundMail);


// .filter()
const noGmail = emails.filter(item => !item.includes("@gmail.com"))

console.log(noGmail);


// .forEach()
const cleaned = []
emails.forEach(email => {
    cleaned.push(email.split("@")[0]);
});

console.log(cleaned);


// .map()
const cleaned = emails.map(email => email.split("@")[0]);

console.log(cleaned);


// return Obejct
// ()를 {}와 같이 쓰면 object도 리턴 받을 수 있다.
const cleaned = emails.map((email, index) => ({
    username: email.split("@")[0], 
    index: index
}));

console.table(cleaned);
