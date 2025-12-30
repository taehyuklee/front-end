// forEach는 어떻게 형성되어 있을까 (실제로는 class로 만들어졌겠지만 method이니까)
function forEach(func1) {
    arr = [1,2,3,4,5]
    for(let i=0; i<arr.length; i++){
        func1(i, arr[i], arr);
    }
}

function B(name, age, hobby) {
    console.log(`name: ${name} age: ${age} hobby: ${hobby}`);
}


forEach((idx, item, arr) => {
    console.log(idx, item*2);
})