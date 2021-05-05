
/* Destructuring?

object나 array, 그 외 요소들 안의 변수를 
바깥으로 끄집어 내서 사용할 수 있도록 하는 것

*/

// object
const settings = {
    notifications : {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
}

if(settings.notifications.follow) {
    //  send email
}

// after destructuring
// follow만 가져오기
const {
    notifications: { follow },
    color
} = settings;

console.log(follow);

// notifications 가져오기
const {notifications} = settings;
// Same As...
// const notificatons = settings.notificatons;

console.log(notificatons);


// 디폴트 값 부여하기
// 만약 settings에 follow 요소가 없거나
// notifications 자체가 없다면
// 둘 다 undefined를 반환할 것이다.
// 이것을 회피하는 방법
const {
    notifications: { follow = false } = {/*empty object*/}
} = settings;

console.log(follow);