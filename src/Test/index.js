class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42
    }

    static publicStaticMethod1() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

console.log( ClassWithPrivateStaticMethod.publicStaticMethod1() );
