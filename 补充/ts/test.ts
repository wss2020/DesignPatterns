class Parent{
    protected data:number;

    constructor(data:number) {
        this.data = data;
    }

    att():void{
        console.log('Parent');
    }
}

class Children extends Parent{
    att():void{
        console.log('Children:' + this.data);
    }
}


let test = new Children(123);

test.att();

