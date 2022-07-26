import demo from "./demo";

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];

console.log(result);

async function initDemo() {
  let data = await demo();
  console.log(data);
}

initDemo();
