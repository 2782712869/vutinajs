# vutinajs 一个TS开发的FP函数工具库

## 使用方法

```typescript
import { map, pipe, filter, reduce, curry, IO, Task } from 'vutinajs';

// 第一个程序，异步获取用户数据并格式化输出
const program1 = IO(() => {
  // 模拟异步操作
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { name: 'John', age: 30 };
      const formattedUser = `User: ${user.name}, Age: ${user.age}`;
      resolve(formattedUser);
    }, 1000);
  });
});

// 第二个程序，异步获取商品信息并格式化输出
const program2 = Task((resolve, reject) => {
  // 模拟异步操作
  setTimeout(() => {
    const product = { name: 'Laptop', price: 1000 };
    const formattedProduct = `Product: ${product.name}, Price: ${product.price}`;
    resolve(formattedProduct);
  }, 2000);
});

// 执行第一个程序
program1.run().then((result1) => {
  console.log(result1);

  // 执行第二个程序
  program2.fork(
    (result2) => console.log(result2),
    (error) => console.error('Error:', error),
  );
});

// 一个数组，用于演示
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 定义一些函数
const isEven = (num) => num % 2 === 0;
const square = (num) => num * num;
const sum = (nums) => reduce((acc, curr) => acc + curr, 0, nums);

// 使用 pipe 组合函数
const program = pipe(filter(isEven), map(square), sum);

// 执行程序并输出结果
const result = program(numbers);
console.log('Sum of squared even numbers:', result);
/***
 * Sum of squared even numbers: 220
 * User: John, Age: 30
 * Product: Laptop, Price: 1000
 */
```
