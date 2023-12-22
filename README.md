# vutinajs 一个TS开发的FP函数工具库

## 使用方法

```typescript
import { map, each, filter, pipe, curry } from 'vutinajs';
const double = curry(map)((x) => x * 2);
const even = curry(filter)((x) => x % 2 === 0);
const log = curry(each)((x) => console.log(x));

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
pipe(even, double, log)(data); // 4 8 12 16 20
```
