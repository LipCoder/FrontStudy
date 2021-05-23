// yield 
// => Generator 선언
function* listPeople() {
    yield "Dal";
    yield "Flynn";
    yield "Mark";
    yield "Godkimchi";
    yield "Japan Guy";
}

const listG = listPeople();

// done 이라는 속성이 있는데
// 이 속성은 데이터를 모두 순회할때까지 
// false 상태이다.
// 완료되면 true로 변경된다.


const friends = ["Dal", "Flynn", "Mark", "Godkimchi", "Japan Guy"];

function* friendTeller() {
    for(const friend of friends) {
        yield friend;
    }
}

const friendLooper = friendTeller();
