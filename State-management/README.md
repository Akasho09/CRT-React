## State manangement 
to avoid unnecessary re-renders.

1. useState 
2. Recoil : 
- Atoms – Independent pieces of state.
  - An atom is a unit of state in Recoil that can be read and updated independently.
```javascript
  import { atom } from "recoil" ;
  export const counterState = atom({
  key: "counterState", // Unique identifier
  default: 0, // Default value
});

    use : const [count, setCount] = useRecoilState(counterState);
```
  
- Selectors – Derived/computed state from atoms.
Selectors allow you to derive or compute state based on atoms.
```javascript 
import { selector } from "recoil";
import { counterState } from "./atoms";

export const doubleCounterState = selector({
  key: "doubleCounterState",
  get: ({ get }) => get(counterState) * 2, // Derived state
});

use :  const doubleCount = useRecoilValue(doubleCounterState);
```

- RecoilRoot – Wraps the application to provide Recoil functionality.
```javascript
<RecoilRoot>
      <Counter />
</RecoilRoot>
```


3. Redux
