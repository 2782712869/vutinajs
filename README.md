# vutinajs 一个TS开发的FP函数工具库

## 文档

### number

#### isNaN

```typescript
const value = 10;
const nan = NaN;
isNaN(value); // false
isNaN(nan); // true
```

#### isNumber

```typescript
const value = 10;
const nan = NaN;
isNumber(value); // true
isNumber(nan); // false
```

### string

#### isString

```typescript
const value = 10;
const string = 'hello world';
isString(value); // false
isString(string); // true
```
