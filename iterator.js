function iter(obj) {
    if(!obj) throw new Error('An object array must be suplied as argument');

    //saves a copy of the original array
    obj = obj.slice();

    function hasNext() {
        return !!obj.length;
    }

    function next() {
        if(!obj.length) throw new Error('Stop iteration');
        return obj.shift();
    }

    return {
        hasNext: hasNext,
        next: next
    };
}

//testing
console.log('Start iterator...');
var arr = [1, null, undefined, false, 2, 3, 4, 5, 6, 7, 8, 9];
var it = iter(arr);

while(it.hasNext()) {
    console.log(it.next());
}

console.log('End of iterator');
