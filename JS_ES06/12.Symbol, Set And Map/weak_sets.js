// weakSet
// Set과 다른점은 Garbage Collection을 
// 약하게 붙들려있다. => 만약 weak set에 넣은 objects를 가리키는 것이 없다면
//                     이것은 지워질것이다.
const weakSet = new WeakSet();
const sexy = {
    im: true
};

weakSet.add(sexy);

weakSet.add({hello:true});
// 이렇게 추가하게 되면 hello를 참조하고 있는 원래값이 없기 때문에
// Garbage Collector에서 이 값을 지울것이다.
// 이 지우는 작업을 언제 하는지는 알 수 없다.