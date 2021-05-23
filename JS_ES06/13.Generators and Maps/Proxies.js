// Proxies

const userObj = {
    username: "nico",
    age: 12,
    password: 1234
};

// 프록시를 사용하면...
// 사용자가 하는 어떤 작업을 필터링 할 수 있다.
// userObj.age = 15를 하면 set을 한것이므로
// set 쪽 함수가 수행될 것이다.
// 이러한 함수 역할명들은 mdn 사이트에 자세하게 나와있다.
const userFilter = {
    get: (target, prop, receiver) => {
        console.log("Somebody is getting something");
        console.log(target);
        console.log(prop);
        console.log(receiver);
        //return target[prop];

        // 필터링 예시
        return prop === "password" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () => {
        console.log("Somebody wrote something");
    },
    // 요소를 삭제한 경우
    deleteProperty: (target, prop) => {
        if(prop === "password") {
            return;
        } else {
            target[prop] = "DELETED";
        }
    }
};

const filteredUser = new Proxy(userObj, userFilter);