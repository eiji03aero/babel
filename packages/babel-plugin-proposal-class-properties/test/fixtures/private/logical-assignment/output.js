function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _foo = new WeakMap();

class Foo {
  constructor() {
    _foo.set(this, {
      writable: true,
      value: 0
    });
  }

  test(other) {
    var _other$obj, _classPrivateFieldGet2, _classPrivateFieldGet3;

    _classPrivateFieldSet(this, _foo, (_classPrivateFieldGet2 = _classPrivateFieldGet(this, _foo)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : 1);

    _classPrivateFieldSet(this, _foo, 2);

    _classPrivateFieldSet(_other$obj = other.obj, _foo, (_classPrivateFieldGet3 = _classPrivateFieldGet(_other$obj, _foo)) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : 1);

    _classPrivateFieldSet(other.obj, _foo, 2);
  }

}
