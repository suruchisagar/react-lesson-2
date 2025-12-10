# React Hooks

## Q1: What are Hooks?
Hooks are functions that allow functional components to use **state** and **lifecycle features** that were previously available only in class components.

---

## Q2: Why do we use Hooks?

- To avoid class components  
- To reuse logic using custom hooks  
- To write cleaner and easier code  

---

# 🟦 useState Hook

`useState` is a React Hook that lets you **create state** in a functional component.

**State = data that changes and updates the UI.**

Examples:
- Counters  
- Form inputs  
- Toggles  
- Lists  

---

##  Syntax

```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

### Breakdown:
- `stateVariable` → holds the current value  
- `setStateFunction` → updates the value  
- `initialValue` → starting value (number, string, array, etc.)  

---

##  Basic Example (Counter)

```js
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>Increase</button>
```

✔ UI updates every time you click  
✔ React re-renders automatically  

---

##  Key Facts (Interview Focus)

### 1️. Updating state re-renders the component

```js
setCount(count + 1);
```

### 2️. State updates are **asynchronous**

```js
console.log(count); // old value
setCount(count + 1);
console.log(count); // still old value
```

---

#  useEffect Hook

`useEffect` is a React Hook that lets you perform **side effects** in functional components.

### Side effects include:
- Fetching data  
- Updating document title  
- Timers (`setTimeout`, `setInterval`)  
- Event listeners  
- LocalStorage operations  

Before hooks, this was done using:
- `componentDidMount`  
- `componentDidUpdate`  
- `componentWillUnmount`  

---

##  Syntax

```js
useEffect(() => {
  // side effect here
}, [dependencies]);
```

---

#  useEffect Behaviors (Based on Dependency Array)

## 1️. Runs ONCE (on mount)

Like `componentDidMount`

```js
useEffect(() => {
  console.log("Runs once");
}, []);
```

✔ Perfect for API calls  
✔ Runs only when component loads  

---

## 2️. Runs when a dependency CHANGES

Like `componentDidUpdate`

```js
useEffect(() => {
  console.log("Runs whenever count changes");
}, [count]);
```

✔ Great for reacting to changing values  

---

## 3️. Runs on EVERY render

(No dependency array)

```js
useEffect(() => {
  console.log("Runs every time component re-renders");
});
```

⚠ Useful only in special cases  
⚠ Can cause performance issues  

---

# Q3: Why do we use Dependency Array?

To control **when** the effect should run:

| Dependency      | Effect Behavior |
|-----------------|-----------------|
| `[]`            | Runs once on mount |
| `[value]`       | Runs when `value` changes |
| *no array*      | Runs on every render |

---
