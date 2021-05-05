const follow = checkFollow();
const alert = checkAlert();

// 이 경우 변수명을 똑같이 하고 싶다면...
const settings = {
    notifications: {
        follow: follow,
        alert: alert
    }
};


// value_shorthand
// 그냥 하나만 쓰면 해결!
const settings = {
    notifications: {
        follow,
        alert
    }
};