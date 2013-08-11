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