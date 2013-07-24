/*
Composite pattern test
----------------------

Is a partitioning design pattern. The composite pattern describes that a group of objects are to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly

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
        if(!pic) {
            pic = 0;
        }
        
        pic++;
        
        var len = this.list.length,
            i = 0;
        
        console.log(rep('-', pic) + this.name);
        
        for(i; i < len; i++) {
            this.list[i].print(pic);
        }
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
        
        console.log(rep('-', pic+1) + buffer);
    }
};

/****usage****
In this case, the instances of Nd are behaving as folders,
and instances of Lf are behaving as files, which are placed inside folders
*/
console.log('Starting composite sample...');
var root = new Nd('root');
var img = new Nd('img');
var js = new Nd('js');
var css = new Nd('css');
css.add(img);
var js = new Nd('js');

root.add(css);
root.add(js);
root.add(new Lf({name: 'lerolero.txt'}));
js.add(new Lf({name: 'app.js'}));
js.add(new Lf({name: 'jquery.js'}));
img.add(new Lf({name: 'logo.png'}));

root.print();
console.log('End of composite sample.');

