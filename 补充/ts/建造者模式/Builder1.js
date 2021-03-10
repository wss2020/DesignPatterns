var ResourcePoolConfig = /** @class */ (function () {
    function ResourcePoolConfig(builder) {
        this.name = builder.name;
        this.maxTotal = builder.maxTotal;
        this.maxIdle = builder.maxIdle;
        this.minIdle = builder.minIdle;
    }
    return ResourcePoolConfig;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.DEFAULT_MAX_TOTAL = 8;
        this.DEFAULT_MAX_IDLE = 8;
        this.DEFAULT_MIN_IDLE = 0;
        this.maxTotal = this.DEFAULT_MAX_TOTAL;
        this.maxIdle = this.DEFAULT_MAX_IDLE;
        this.minIdle = this.DEFAULT_MIN_IDLE;
    }
    Builder.prototype.build = function () {
        // 校验逻辑放到这里来做，包括必填项校验、依赖关系校验、约束条件校验等
        if (!this.name)
            throw "...";
        if (this.maxIdle > this.maxTotal)
            throw "...";
        if (this.minIdle > this.maxTotal || this.minIdle > this.maxIdle)
            throw "...";
        return new ResourcePoolConfig(this);
    };
    Builder.prototype.setName = function (name) {
        if (!name)
            throw "...";
        this.name = name;
        return this;
    };
    Builder.prototype.setMaxTotal = function (maxTotal) {
        if (maxTotal <= 0)
            throw "...";
        this.maxTotal = maxTotal;
        return this;
    };
    Builder.prototype.setMaxIdle = function (maxIdle) {
        if (maxIdle < 0)
            throw ('....');
        this.maxIdle = maxIdle;
        return this;
    };
    Builder.prototype.setMinIdle = function (minIdle) {
        if (minIdle < 0)
            throw "...";
        this.minIdle = minIdle;
        return this;
    };
    return Builder;
}());
// 这段代码会抛出IllegalArgumentException，因为minIdle>maxIdle
var config = new Builder()
    .setName("wss")
    .setMaxTotal(16)
    .setMaxIdle(13)
    .setMinIdle(99) // 改为12 就不报错
    .build();
console.log(config.name);
console.log(config.maxTotal);
console.log(config.maxIdle);
console.log(config.minIdle);
