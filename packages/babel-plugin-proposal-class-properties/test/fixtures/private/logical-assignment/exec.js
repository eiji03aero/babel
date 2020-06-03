class Foo {
  #nullish = 0;
  #and = 0;
  #or = 0;

  get () {
    return {
      nullish: this.#nullish,
      and: this.#and,
      or: this.#or,
    };
  }

  setNullish (v) {
    this.#nullish ??= v;
  }

  setAnd (v) {
    this.#and &&= v;
  }

  setOr (v) {
    this.#or ||= v;
  }
}

const f = new Foo();

f.setNullish(1);
expect(f.get().nullish).toBe(0)

f.setAnd(1);
expect(f.get().and).toBe(0)

f.setOr(1);
expect(f.get().or).toBe(1)
