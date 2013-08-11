/*
Composite pattern test
----------------------

Is a partitioning design pattern. The composite pattern describes that a group of objects are to be treated in 
the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree
structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual 
objects and compositions uniformly

http://en.wikipedia.org/wiki/Composite_pattern
*/

//repeats a character n times
function rep(str, n) {
    return Array(n+1).join(str);
}

//Node prototype
function Nd(name) {
    this.list = [];
    this.name = name;
}

Nd.prototype = {
    name: '',
    list: null,

    add: function(c) {
        this.list.push(c);
    },

    print: function(pic) {
        var buffer = '';

        if(!pic) {
            pic = 0;
        }
        
        pic++;
        
        var len = this.list.length,
            i = 0;
        
        buffer += rep('-', pic) + this.name + '\n';
        
        for(i; i < len; i++) {
            buffer += this.list[i].print(pic) + '\n';
        }

        return buffer;
    }
};

//Leaf prototype
function Lf(data) {
    this.data = data;
}

Lf.prototype = {
    print: function(pic) {
        var buffer = '', k;
        
        for(k in this.data) {
            buffer += k + ': ' + this.data[k];
        }
        
        return rep('-', pic+1) + buffer;
    }
};