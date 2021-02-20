class ResourcePoolConfig {
    #name;
    #maxTotal;
    #maxIdle;
    #minIdle;

    constructor(builder) {
        this.#name = builder.name;
        this.#maxTotal = builder.maxTotal;
        this.#maxIdle = builder.maxIdle;
        this.#minIdle = builder.minIdle;
   }

   get name(){ return this.#name; }
   get maxTotal(){ return this.#maxTotal; }
   get maxIdle(){ return this.#maxIdle; }
   get minIdle(){ return this.#minIdle; }
}

class Builder {
    #DEFAULT_MAX_TOTAL = 8;
    #DEFAULT_MAX_IDLE = 8;
    #DEFAULT_MIN_IDLE = 0;
    name;
    maxTotal = this.#DEFAULT_MAX_TOTAL;
    maxIdle = this.#DEFAULT_MAX_IDLE;
    minIdle = this.#DEFAULT_MIN_IDLE;

    build() {
        // 校验逻辑放到这里来做，包括必填项校验、依赖关系校验、约束条件校验等
        if (!this.name) console.log("...name");
        if (this.maxIdle > this.maxTotal) console.log("...maxIdle>maxTotal");
        if (this.minIdle > this.maxTotal || this.minIdle > this.maxIdle) console.log(".1.1.");
        return new ResourcePoolConfig(this);
    }

    setName(name) {
        if (!name) console.log("...name");
        this.name = name;
        return this;
    }

    setMaxTotal(maxTotal) {
        if (maxTotal <= 0) console.log("...maxTotal");
        this.maxTotal = maxTotal;
        return this;
    }

    setMaxIdle(maxIdle) {
        if (maxIdle < 0) console.log("...maxIdle");
        this.maxIdle = maxIdle;
        return this;
    }

    setMinIdle(minIdle) {
        if (minIdle < 0) console.log("...minIdle");
        this.minIdle = minIdle;
        return this;
    }
}

// 这段代码会抛出IllegalArgumentException，因为minIdle>maxIdle
const config = new Builder()
    .setName("dbconnectionpool")
    .setMaxTotal(16)
    .setMaxIdle(13)
    .setMinIdle(12)
    .build();

console.log(  config.name );
console.log(  config.maxTotal );
console.log(  config.maxIdle );
console.log(  config.minIdle );