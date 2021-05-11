// rest의 좋은 예
const user = {
    name: "nico",
    age: 24,
    password: 12345
};

// 1. 요소 지우기

// no use
user["password"] = null;
console.log(user);


// destructuring + rest
// 현재 rest 값은 password를 제외한 나머지이므로
// rest를 리턴해주면 나머지만 가지고 올 수 있다.
const killPassword = ({password, ...rest}) => rest;
const cleanUser = killPassword(user);
console.log(cleanUser);


// 2. 요소 추가하기
// default value + rest + destruction + spread
const setCountry = ({country = "KR", ...rest}) => ({country, ...rest});
console.log(setCountry(user));


// 3. 속성명 바꾸기
const rename = ({NAME:name, ...rest}) => ({name, ...rest});
console.log(rename(user));