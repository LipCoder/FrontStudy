const emails = ["nco.@no.com", "naver@google.com", "lynn@gmail.com", "nico@nomad.com"];

// .find()
const foundMail = email.find(item => item.includes("@gmail.com"));

console.log(foundMail);


// .filter()
const noGmail = emails.filter(item => !item.includes("@gmail.com"))

console.log(noGmail);


// .forEach()
// 배열 각 요소에 대해 콜백한다.
// 중간에 break 하는 조건이 따로 없다.
const cleaned = []
emails.forEach(email => {
    cleaned.push(email.split("@")[0]);
});

console.log(cleaned);


// .map()
// 하는 작업은 forEach와 같지만, 결과를 모은 새 배열을 리턴한다.
const cleaned = emails.map(email => email.split("@")[0]);

console.log(cleaned);


// return Obejct
// ()를 {}와 같이 쓰면 object도 리턴 받을 수 있다.
const cleaned = emails.map((email, index) => ({
    username: email.split("@")[0], 
    index: index
}));

console.table(cleaned);
