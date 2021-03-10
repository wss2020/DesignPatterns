
class ResourcePoolConfig {
    readonly name:string;
    readonly maxTotal:number;
    readonly maxIdle:number;
    readonly minIdle:number;

    constructor(builder) {
        this.name = builder.name;
        this.maxTotal = builder.maxTotal;
        this.maxIdle = builder.maxIdle;
        this.minIdle = builder.minIdle;
    }
}


interface setFunc{
    setName(name:string):Builder;
    setMaxTotal(maxTotal:number):Builder;
    setMaxIdle(maxIdle:number):Builder;
    setMinIdle(minIdle:number):Builder;
}

class Builder implements setFunc{
    private  DEFAULT_MAX_TOTAL:number = 8;
    private  DEFAULT_MAX_IDLE:number = 8;
    private  DEFAULT_MIN_IDLE :number= 0;

    private name:string;
    private maxTotal:number = this.DEFAULT_MAX_TOTAL;
    private maxIdle:number = this.DEFAULT_MAX_IDLE;
    private minIdle:number = this.DEFAULT_MIN_IDLE;

    public build() {
        // 校验逻辑放到这里来做，包括必填项校验、依赖关系校验、约束条件校验等
        if (!this.name) throw "...";
        if (this.maxIdle > this.maxTotal) throw "...";
        if (this.minIdle > this.maxTotal || this.minIdle > this.maxIdle) throw "...";

        return new ResourcePoolConfig(this);
    }

    public setName(name:string):Builder {
        if (!name) throw "...";
        this.name = name;
        return this;
    }

    public setMaxTotal(maxTotal:number):Builder {
        if (maxTotal <= 0) throw "...";
        this.maxTotal = maxTotal;
        return this;
    }

    public setMaxIdle(maxIdle:number):Builder {
        if (maxIdle < 0) throw('....')
        this.maxIdle = maxIdle;
        return this;
    }

    public setMinIdle(minIdle:number):Builder {
        if (minIdle < 0) throw "...";
        this.minIdle = minIdle;
        return this;
    }
}

// 这段代码会抛出IllegalArgumentException，因为minIdle>maxIdle
const config = new Builder()
    .setName("wss")
    .setMaxTotal(16)
    .setMaxIdle(13)
    .setMinIdle(99)  // 改为12 就不报错
    .build();

console.log(  config.name );
console.log(  config.maxTotal );
console.log(  config.maxIdle );
console.log(  config.minIdle );