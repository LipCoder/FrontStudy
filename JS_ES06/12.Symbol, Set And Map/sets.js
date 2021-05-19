const user = {
    age: 12,
    name: "nico"
};

user.oneMore = true;

user.name = null;

// set은 object와 비슷하지만, 규칙이 존재한다.
// 1. 모든 Value들은 Unique 해야한다.
const sexySet = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 8]);
// 7이 중복되었고, 중복된 7값들은 무시된다.

// 다양한 편의 기능들을 제공한다.
sexySet.has(9);
sexySet.has(1);

sexySet.delete(1);
sexySet.clear();

sexySet.add([10, 11, 12, 13, 14]);

sexySet.size;

sexySet.key();

