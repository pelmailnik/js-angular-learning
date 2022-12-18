const objectTest = {
  output(str) {
    return `got argument - ${str}`;
  },
  calc(a, b) {
    return (a * 3 + b * 3) / 2;
  },
};

function ProtoTest() {}
ProtoTest.prototype.output = (str) => { return `got argument - ${str}`; };
ProtoTest.prototype.calc = (a, b) => { return (a * 3 + b * 3) / 2; };

class ClassTest {
  output(str) {
    return `got argument - ${str}`;
  }
  calc(a, b) {
    return (a * 3 + b * 3) / 2;
  }
}

function CloserTest() {
  this.output = (str) => { return `got argument - ${str}`; };
  this.calc = (a, b) => { return (a * 3 + b * 3) / 2; };
}

function test(Item, str, show = true) {
  const iterations = 1e6;
  const testStartDateTime = new Date();
  let variable;

  for (let i = 0; i < iterations; i++) {
    variable = Item.output ? Item : new Item;
    variable.output('hello');
    variable.calc(i, 2);
  }

  const testEndDateTime = new Date();
  const testTime = testEndDateTime.getTime() - testStartDateTime.getTime();

  return testTime + show;
  // if (show) {
  //   console.log(`${str} time - ${testTime}`);
  // }
}

test(ProtoTest, 'prototype', false);
test(CloserTest, 'closures', false);
test(objectTest, 'object', false);
test(ClassTest, 'class', false);
test(ProtoTest, 'prototype');
test(CloserTest, 'closures');
test(objectTest, 'object');
test(ClassTest, 'class');
