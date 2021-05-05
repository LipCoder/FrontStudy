// function destructuring 
// 1. 변수들의 가독성을 확보
// 2. 각 변수의 기본 값 설정


function saveSettings({follow, alert, color = "blue"}){
    console.log(color);
}

saveSettings({
    follow:true,
    alert: true,
    mkt: false
});

// OR
function saveSettings({notifications, color: {theme}}){
    console.log(color);
}

saveSettings({
    notifications: {
        follow:true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
});