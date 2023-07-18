# FE コード例

コーディングしやすいように是非使ってみてほしい

# 配列の命名

配列の命名は、それぞれの変数の名前に List をつける形で実装してほしい

# TypeScript,React

```tsx
// src/components/Component.ts
export const Component = () => {
  return <>// 処理</>;
};
export default Component;

// 呼び出し側
import { Component } from "src/components/Component";
<Component />;
```

# Props(親コンポーネントから、子コンポーネントに値を渡すための値)の書き方

```tsx
// 1つのとき
const Component = ({ label }: Props) => {
  return <p>{label}</p>;
};

//2つ以上のとき

type Props = { a: number; b: strig };

const Component = ({ a, b }: Props) => {
  return <p>{(a, b)}</p>;
};
```
