# React

## What is React?

- react is a javascript library for building user interfaces .
- A Single Page Application is a web app that dynamically updates its content without reloading the entire page. React is particularly good for SPAs due to its modular design, virtual DOM, and ecosystem, though other tools can also be used to achieve similar results.
- **functions that react provide** :
    - **Virtual Dom :**
    - **Declarative Syntax:** React will Update Dom or do things for you itself we have to just tell do this task then react will decide how he will do task .
    - Unidirectional Data Flow:
    - **component-based architecture:**
    - **JSX:**
    - **Ecosystem and Flexibility:**
    - **Popularity and Community Support:**
- How React Changes DOM ?
    
    React never directly updates the Real DOM. It has a Virtual DOM, which is a lightweight JavaScript object representation of the Real DOM. When we change an element (like updating state or props), React creates an updated Virtual DOM. Then, React compares the old Virtual DOM with the new one using a diffing algorithm. This comparison identifies where changes have occurred. React only applies the necessary changes to the Real DOM. This entire process is called Reconciliation. React's Fiber architecture makes reconciliation faster and more efficient by prioritizing updates.
    
- Why React asking for give key for every index when we are making list ?
    
    React asks for a key when rendering lists because it helps efficiently track and update individual elements. When the virtual DOM is updated, React needs a way to identify each element uniquely, and without keys, it would struggle to determine which items have changed, moved, or been removed. Using keys ensures better performance by helping React minimize unnecessary re-renders.
    
- Diffrence Between Real and virtual Dom:
    
    
    | `Real DOM` | `Virtual DOM` |
    | --- | --- |
    | DOM manipulation is very expensive | DOM manipulation is very easy |
    | There is too much memory wastage | No memory wastage |
    | It updates Slow | It updates fast |
    | It can directly update HTML | It can’t update HTML directly |
    | Creates a new DOM if the element updates. | Update the JSX if the element update |
    | It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
    | It represents the UI of your application | It is only a virtual representation of the DOM |

### How React Renders UI :

steps : 

- 1. Receiving the Requested Document :
    
    The browser's rendering engine fetches the content of the requested document through the networking layer of HTML.
    
- 2. **Building the DOM Tree**
    - The HTML is parsed to create a parsed tree.
    - This parsed tree is then converted into the DOM (Document Object Model) tree, which helps understand the structure of the HTML.
- 3. **Building the CSSOM Tree**
    - **CSSOM** stands for CSS Object Model.
    - While the DOM tree is being created, the browser looks for a link tag in the `<head>` section of the HTML that refers to an external CSS stylesheet (e.g., `style.css`).
    - The CSS file is parsed to create a CSSOM tree, which the browser uses to understand the styling data.
- 4. **Building the Render Tree**
    - The browser combines the **HTML DOM tree** with the **CSSOM tree's styling data** to create a **Render Tree**.
    - This tree is a graphical representation of the HTML and CSS.
    - It helps determine the correct order to paint the content.
    - Each node in the Render Tree is called a renderer.
- 5. **Layout (Setting Size and Position)**
    - When renderers are added to the tree, they do not initially have a size or position.
    - In the **layout phase**, the size and position of each element are calculated.
    - A coordinate system (e.g., the root renderer's position is 0,0) is used to position the elements on the screen.
    - This calculation is done recursively for all elements in the render tree.
- 6. **Painting the Render Tree**
    - The Render Tree is traversed, and each renderer's `paint()` method is called to display the content on the screen.
    - To improve the user experience, the rendering engine tries to show content on the screen as quickly as possible.
    - It does not wait for the entire HTML to be parsed but instead renders partial content when available.

## React Fiber Architecture :

- A **fiber** is a unit of work representing a component's state, props, and other details.
- Fiber acts like a virtual **stack frame**, enabling React to pause and resume tasks.
- **React Fiber** is a reimplementation of React's core algorithm, designed to enhance its handling of animations, layouts, and gestures by enabling **incremental rendering**.
- It allows breaking down rendering work into smaller chunks, prioritizing tasks, and managing them efficiently.

### **Goals of React Fiber**

1. **Incremental Rendering**: Split rendering into chunks spread over multiple frames.
2. **Scheduling**: Assign priorities to updates (e.g., animations vs. background tasks).
3. **Flexibility**: Pause, resume, reuse, or abort work as needed.

### Diffrence Between Element Component :

| **Feature** | **Element** | **Component** |
| --- | --- | --- |
| **Definition** | UI ka static part | Dynamic aur reusable part |
| **Nature** | Immutable | Mutable |
| **Functionality** | Sirf ek node ya UI ka ek portion | Logic, state, aur behavior include karta hai |
| **Creation** | `React.createElement()` ya JSX | Function ya Class ke through |
| **Usage** | for building small parts | Reusable aur modular UI banane ke liye |

## What is JSX and How Browser UnderStands JSX ?

JSX : JavaScript XML 

- it is the way of writing html and JavaScript together in react . which helps in code to be readable , simple and dynamic .
- JSX compiles in JavaScript .

**for understanding JSX we have Babel :**

- **Transpiles JSX:**
    
    Babel transforms JSX syntax, which resembles HTML and is used to define React component structures, into regular JavaScript function calls that the browser can understand.
    
    `React.createElement()` calls me convert karta hai
    
- **Enables Modern JavaScript:**
    
    Babel allows you to write React code using the latest JavaScript features like arrow functions, classes, destructuring, and more.
    

### What is Vite ?

- **Vite** is a fast build tool and bundler. It helps bundle your code (combine different files into one) for production and also speeds up the development process by providing quick updates without reloading the page.
- A **bundler** combines multiple code files, CSS, images, etc., into a smaller number of optimized files to make your website load faster.

### What is State and why we need This ?

- **State** in React is a way to store and manage data that can change over time within a component. It allows the component to "remember" information, and when that information changes, React automatically re-renders the component to update the user interface.

React manages state through a built-in feature called the **`useState` hook** (in functional components) or using **`this.setState`** (in class components)
- React Updates states Asynchronously

### What is HOOKS in react?

A hook in React is a special function that helps manage a component's state and lifecycle features without using class components. Hooks can be used in functional components, making React simpler and more efficient.

### Types of HOOKS?

- **useState:**
    - Allows functional components to have state.
    - React ka built-in hook jo functional component me state banana aur usko update karna allow karta hai.
    - it returns the array have current state and setstate function
    - you can pass a function as an argument to the setter function of `useState`.
        
        setCount(prevCount => prevCount + 1);
        
        functional update bolte hai isko 
        
    - Example: `const [count, setCount] = useState(0);` if we don’t pass anything default value will be undefined
    - **Why do we need `useState Hook`?**
        
        `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
        
        ### ❌ Why **not** just use a variable?
        
        ```
        let count = 0;
        
        function Counter() {
          function increment() {
            count++;
            console.log(count);
          }
        
          return <button onClick={increment}>Click me</button>;
        }
        ```
        
        This looks fine, right? But here's the **trap**:
        
        - React **doesn’t track normal variables**.
        - Every time your component re-renders, the **entire function runs again**, and `let count = 0` is re-initialized.
        - Your incremented value is lost unless you use something like `localStorage`, which is not efficient or reactive.
        
        ---
        
        ### ✅ Why `useState` is Needed?
        
        ```
        
        const [count, setCount] = useState(0);
        ```
        
        - React maintains this `count` in **internal memory (React Fiber tree)** — it's not part of the DOM, not a DB, not even a global JS variable.
        - When you call `setCount`, React:
            - **Updates** that state in memory.
            - **Schedules a re-render**.
            - **Preserves** that value through the re-render.
        
        ➡️ This works **even across multiple renders** because React is managing a **persistent memory snapshot** of that component’s state.
        
        ---
        
        ### ⚙️ Where is it stored if not in DB?
        
        Socho React har component ke liye ek chhota memory locker banata hai — har baar jab render hota hai:
        
        - Agar `useState` use hua hai, toh React woh value **internally track karta hai via hooks system.**
        - Iske peeche ka logic: **React maintains an array of states per component instance**, and hook calls (like `useState`) are positional — so React knows **kaunsa state kis render ke liye tha**.
        
        Matlab React bole:
        
        > "Tu useState se mujhe batade kaunse value track karni hai. Baaki ka kaam main sambhal lunga, chinta mat kar."
        > 
        
        ---
        
        ### 🔍 React Behind the Scenes (Simplified):
        
        ```
        function MyComponent() {
          const [name, setName] = useState("Praveen");
          // React internally does:
          // componentState[0] = "Praveen";
        }
        ```
        
        Next render:
        
        ```
        function MyComponent() {
          const [name, setName] = useState(); // React pulls from componentState[0]
        }
        ```
        
        So, it's not a DB — it's React’s **in-memory state registry** tied to component lifecycle.
        
        ---
        
        ### 🧠 TL;DR
        
        | Variable | useState |
        | --- | --- |
        | Normal JS var | Lost after re-render |
        | No React tracking | React tracks it automatically |
        | No UI update | Triggers re-render |
        | No persistence | Maintains value in memory |
- **useEffect**:
    - Allows you to perform side effects like data fetching, subscriptions, or manually changing the DOM.
    - Side Effects means jo re rendering me participate nhi karta hai jaise ki api call use component rendering se koi kaam nhi hai wo tabhi chalega jab uska dependency array me given value update honge
    - Runs after the render and can be controlled with dependency arrays.
    - Example: `useEffect(() => { console.log('Component mounted'); }, []);`
    
    ## 🧨 Problem: `useEffect(async () => { ... })`
    
    ### ⚠️ Kya galat hai?
    
    ```tsx
    
    useEffect(async () => {
      const response = await axios.get("https://api.com/todos");
      setTodos(response.data.todos);
    },
    ```
    
    ### ❌ Why it's NOT a good practice:
    
    1. **React ka `useEffect` expects cleanup-return, not a Promise**
        - React expects: `() => void | (() => void)`
        - Par tu de raha hai: `async () => Promise<void>`
        - Promise-returning effect can lead to **memory leaks** or **unhandled cleanup**, especially during unmount.
    2. **Aborted fetch on unmounted components**
        - Component unmount hone se pehle agar data aaya, to `setState()` on unmounted component error throw karega ya warning dega.
    3. **No proper error handling / cancellation**
        - Async function ke andar agar error aaya, toh voh propagate properly nahi hota without try-catch.
    
    ---
    
    ## ✅ Solution: Declare Async Function *Inside* the Effect
    
    ```tsx
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://api.com/todos");
          setTodos(response.data.todos);
        } catch (err) {
          console.error('Error fetching todos', err);
        }
      };
    
      fetchData(); // call the async function
    }, []);
    ```
    
    ## `setState()` on unmounted component? Kya matlab?
    
    Tu ne async code likha:
    
    ```tsx
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get("https://api.com");
        setData(res.data); // 👈 THIS line
      };
      fetchData();
    }, []);
    ```
    
    ### ❗ Now imagine:
    
    - Component render hua → effect chala → API call gaya
    - **User ne page chhoda ya component unmount ho gaya**
    - API response aaya *baad mein*
    - `setData()` call ho gaya **lekin component toh mar chuka hai bhai!**
    
    🧨 **Boom! React warning**:
    
    > Can't perform a React state update on an unmounted component
    > 
    
    Ye isliye problem hai kyunki React ke andar ek component jo unmount ho gaya uska **memory se nikal chuka hai UI link**, but tu usse fir bhi state update kar raha hai.
    
    ⚠️ This causes:
    
    - Memory leak
    - Performance dip
    - Unexpected bugs in SPA
    - **Important Thing to notice**
        
        **This is Best Way to Work with Api Calling** 
        
        ```jsx
        useEffect(() => {
        	const controller = new AbortController();
        	const fetchData = async () => {
        		try {
        			const res = await axios.get("[https://api.com/todos](https://api.com/todos)", {
        			signal: controller.signal,
        		});
        		setTodos(res.data.todos);
        		} catch (err) {
        		if (axios.isCancel(err)) {
        		console.log("Fetch cancelled");
        		} else {
        		console.error("Fetch failed", err);
        		}
        		}
        	};
        	fetchData();
        	return () => {
        	controller.abort(); // 👈 Clean up here
        };
        }, []);
        ```
        
        **"Mainne kaafi projects kiye, par `AbortController` kabhi zindagi me dekha nahi. Kya industry me log use karte bhi hain?"**
        
        Let’s rip the bandaid:
        
        ### ✅ **Short Answer:**
        
        **"Most devs ignore this and get away with it... until it bites them hard.**
        
        Industry me log 80% time `AbortController` **nahi** likhte — especially if:
        
        - App me API call short-lived hote hain
        - Component quickly unmount nahi hota
        - Ya kisi ne warning notice hi nahi ki React kya chilla raha hai console me
        
        ---
        
        ## 🔍 **Reality Check: Industry ka Sach**
        
        ### ⚠️ 1. **“Chalta hai” Culture:**
        
        ```tsx
        tsx
        CopyEdit
        useEffect(() => {
          axios.get("/api/data").then((res) => setData(res.data));
        }, []);
        
        ```
        
        Bhai mostly yahi hota hai — no cleanup, no cancel. Because:
        
        - Works in 90% cases
        - Fast fetches don’t cause problems
        - Log toh ignore kar dete hain console ki React warning ko
        
        ### ⚠️ 2. **Testing nahi hota Unmount scenarios pe**
        
        - QA bhi unmount ke test nahi likhta
        - “Fast network” wale dev machines me ye kabhi crash nahi hota
        - Production me **mobile pe slow 3G** → tab jaake errors dikhte hain
        
        ---
        
        ## 💡 **Production-Grade Teams Kya Karte Hain?**
        
        ### ✅ **High-quality teams use `AbortController` OR similar cleanup strategy** IF:
        
        - Long-running API call hai (e.g. search autosuggest, chat fetch, logs)
        - User tab or route quickly change kar sakta hai
        - Suspense, lazy load, or socket subscription based apps ban rahe hain
        
        ### ✅ Example: Chat App, Analytics Dashboard, Data-heavy apps
        
        Waha:
        
        - Request cancel karna zaroori hai
        - Memory leaks prevent karna business-impacting hota hai
        
        ---
        
        ## 🧠 Real Life Alternatives Industry Me:
        
        | Method | Use Case | Industry Usage |
        | --- | --- | --- |
        | `AbortController` | Axios / Fetch cancel | Used by senior devs or well-tested apps |
        | `let isMounted = true` | Guard setState | Still used in mid-size projects |
        | `react-query`, `SWR` | Handles auto-cancel & caching | 🔥 Pro-level apps |
        | `Redux middleware` | Cancel ongoing side effects | Large apps with Redux Saga/Thunk |
        
        ---
        
        ## 💥 `react-query` / `SWR` = Next-Level Handling
        
        ```tsx
        tsx
        CopyEdit
        import { useQuery } from 'react-query';
        
        const { data, isLoading } = useQuery('todos', () =>
          axios.get('/api/todos').then(res => res.data)
        );
        
        ```
        
        ✅ Automatically cancels in-flight requests
        
        ✅ Handles unmounts
        
        ✅ Background refetch, retries, cache etc.
        
        > 🔥 Yahi hota hai "industry-level code with batteries included"
        > 
        
        ---
        
        ## ✅ So tu kya kare?
        
        ### 🚀 If you're building a side project:
        
        - Small? Ignore it, tu chill maar
        - Long-lived fetch? Use `isMounted` or `AbortController`
        
        ### 🏢 If you're writing code for production:
        
        - Use `AbortController` with Fetch/Axios
        - OR switch to `react-query`/`SWR` if API heavy app
    - Learn React-Query (Api handling like a pro)
        
        Aree haan bhai! 🔥 Tu exactly wahi poochh raha hai jo naye devs ke dimaag mein hota hai —
        
        > "React mein toh hamesha API call useEffect mein karte hain, yeh useQuery ne useEffect ko kaise skip kar diya?"
        > 
        
        Toh chalo **ye misconception tor-te hain,** aur explain karte hain full system jaise main college ka DevOps prof hoon 😎
        
        ---
        
        ## 🧠 React Philosophy Recap:
        
        ### Normal Pattern (Without React Query):
        
        ```tsx
        useEffect(() => {
          axios.get('/api/data')
            .then((res) => setData(res.data));
        }, []);
        ```
        
        Yahan pe manually handle karte ho:
        
        - `loading` state
        - `error` state
        - `retries`
        - `cancelation`
        - cache? Nahi bhai
        - stale data refetch? Bilkul nahi
        
        ---
        
        ## 🚀 React Query = `useEffect` + `useState` + `Axios` + 💯
        
        `react-query` internally already **uses `useEffect` under the hood**.
        
        Tujhe `useEffect` likhne ki zarurat nahi padti kyunki:
        
        ### `useQuery()` ka kaam hi ye hai:
        
        | Feature | Handled by `useQuery()`? |
        | --- | --- |
        | Auto-fetch on mount | ✅ |
        | Background refetch | ✅ |
        | Cache response | ✅ |
        | Retry on fail | ✅ |
        | Cancel fetch on unmount | ✅ |
        | Set loading & error state | ✅ |
        | Refetch on window focus / reconnect | ✅ |
        | No manual `useEffect` needed | ✅ ✅ ✅ |
        
        ---
        
        ## ⚡ Tera Example Revisited:
        
        ```tsx
        const getTodos = async () => {
          const res = await axios.get('/api/todos');
          return res.data;
        };
        
        const Todos = () => {
          const { data, isLoading, error } = useQuery('todos', getTodos);
        ```
        
        ### Ye `useQuery` internally:
        
        - Component mount hote hi, `useEffect` chalata hai
        - Data fetch karta hai
        - Automatically response ko cache me daal deta hai
        - `setState` nahi karna padta — because `data`, `isLoading`, `error` sab handle ho chuka hai!
        
        ---
        
        ## ✅ When To Use `useEffect` Then?
        
        Use `useEffect` jab:
        
        - Tujhe non-query side effects karne ho (e.g. DOM manipulation, event listener add, analytics track, subscriptions etc)
        - Tu khud custom cache, polling, retries banana chahta ho (not recommended unless needed)
        - Tu `mutation` (POST/PUT/DELETE) kar raha ho (tab `useMutation` use karo from react-query)
        
        ---
        
        ## 🧠 TL;DR — Summary
        
        | Scenario | Use |
        | --- | --- |
        | Simple fetch, manage loading/error/cache | ✅ `useQuery()` |
        | Update/POST/DELETE | ✅ `useMutation()` |
        | Non-API side effects | ✅ `useEffect()` |
        | Manual API fetch w/o react-query | ✅ `useEffect + axios` |
        | API with full control, retry, cancel, cache | 🔥 `react-query + axios` |
    - **Confusion wala question:**
        
        ## Question Recap:
        
        ```tsx
        // 1️⃣ Inline function without wrapping
        <button onClick={setSelectedId(2)}>2</button>
        
        // 2️⃣ Wrapped function
        <button onClick={function() { setSelectedId(3); }}>3</button>
        ```
        
        ---
        
        ## ⚠️ 1st Button is **WRONG**
        
        ```tsx
        <button onClick={setSelectedId(2)}>2</button
        ```
        
        Yeh **function call ho gaya render ke waqt hi!**
        
        ### 🔍 Kya ho raha hai?
        
        - `setSelectedId(2)` **turant execute** ho gaya render time pe
        - `onClick` mein actual `undefined` assign ho gaya (kyunki `setSelectedId()` returns `void`)
        - Button click karne par kuch nahi hoga ya error milega
        
        ### ❌ Ye kabhi mat kar!
        
        ---
        
        ## ✅ 2nd Button is **Correct**
        
        ```tsx
        <button onClick={function() { setSelectedId(3); }}>3</button>
        ```
        
        - Yaha `function` wrap hai → React ko function mila, **not its execution**
        - Ye function tabhi chalega jab user **click karega**
        - Yehi sahi React style hai
        
        ---
        
        ## ✅ ✅ Better Version (Arrow Function):
        
        ```tsx
        <button onClick={() => setSelectedId(3)}>3</button>
        ```
        
        Yeh concise, readable aur most used version hai in production React apps.
        
        ---
        
        ## 🧪 Real-world Use Cases:
        
        ### 1. **Inline Handler (when simple):**
        
        ```tsx
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        ```
        
        - One-liner
        - No logic branching
        - Lightweight
        
        ### 2. **Separate Function (when complex):**
        
        ```tsx
        function handleClick() {
          setSelectedId(3);
          trackAnalytics("User Selected ID 3");
          setTimeout(() => alert("Delayed side-effect"), 1000);
        }
        
        <button onClick={handleClick}>3</button
        ```
        
        - Logic > 1 line
        - Side-effects, analytics, logs
        - Better for testing & readability
        
        ---
        
        ## 💡 BONUS: Performance Optimization
        
        If you're creating 100s of buttons in a list:
        
        ```tsx
        <button onClick={() => setSelectedId(id)}>Select</button>
        ```
        
        Ye har render pe **nayi function** banayega — sometimes this can cause re-renders unnecessarily.
        
        **Solution?** Memoize it:
        
        ```tsx
        const handleClick = useCallback((id) => setSelectedId(id), []);
        ```
        
        OR use event delegation / handler hoisting.
        
- **useContext**:
    
    `useContext` is a **hook to consume context** created via `React.createContext()`. Instead of passing props down manually at every level (prop-drilling), `useContext` allows you to directly access shared state or values **anywhere** in the component tree.
    
    ---
    
    ### 💡 **When to Use `useContext`**
    
    Use `useContext` when:
    
    - You need global/shared state (e.g., auth user, theme, language).
    - You want to avoid prop-drilling.
    - You want to centralize configuration or utility functions.
    
    ---
    
    ### 🔩 **How It Works**
    
    1. Create the context:
        
        ```tsx
        const ThemeContext = React.createContext('light');
        ```
        
    2. Provide the context value at a higher level:
        
        ```tsx
        <ThemeContext.Provider value="dark">
          <App />
        </ThemeContext.Provider>
        ```
        
    3. Consume it via `useContext` hook:
        
        ```tsx
        import { useContext } from 'react';
        
        const MyComponent = () => {
          const theme = useContext(ThemeContext);
          return <div className={theme}>This is {theme} mode</div>;
        };
        ```
        
    
    ---
    
    ### ⚠️ **Things to Keep in Mind**
    
    - `useContext` only reads the value **from the nearest matching Provider**.
    - If the context value changes, **all consumers re-render**.
    - Not suitable for high-frequency state (like animation state or real-time data). For that, use something like `useState`, `useReducer`, or `zustand`.
    
    ---
    
    ### 🚀 **Best Practices**
    
    ✅ Split context into multiple smaller contexts (e.g., `ThemeContext`, `AuthContext`)
    
    ✅ Memoize context values to avoid unnecessary re-renders
    
    ✅ Wrap `Provider` logic in a custom hook for cleaner API
    
- **useRef**:
    - Allows you to persist values between renders and access DOM elements directly.
    - Example: `const inputRef = useRef(null);`
- **useCallback**:
    - Memoizes a function so that it doesn’t get recreated on every render.
    - Example: `const memoizedCallback = useCallback(() => { doSomething(); }, [dependency]);`
    
    ### When Does Re-Render Actually Happen?
    
    ```tsx
    const Parent = () => {
      const [count, setCount] = useState(0);
    
      const handleClick = () => console.log("clicked");
    
      return (
        <><button onClick={() => setCount(count + 1)}>Inc</button>
          <Child onClick={handleClick} />
        </>
      );
    };
    ```
    
    Now when user clicks "Inc":
    
    - `setCount()` triggers re-render of `Parent`
    - React re-runs `Parent()` function
    - So `handleClick = () => console.log(...)` **is re-created**
    - `Child` receives **new `onClick` reference**
    - If `Child` is wrapped in `React.memo`, it **will still re-render** (because prop reference changed)
    
    ---
    
    ### 🔒 If You Used `useCallback`:
    
    ```tsx
    const handleClick = useCallback(() => {
      console.log("clicked");
    }, []);
    ```
    
    - Now, even when `Parent` re-renders due to `count` change
    - `handleClick` ka **reference same rahega**
    - `Child` won’t re-render, if it's memoized
    
    ---
    
    ### ✅ Summary of Scenarios:
    
    | Action | handleClick re-created? | Child Re-render (if memoized)? |
    | --- | --- | --- |
    | Parent re-render (no useCallback) | ✅ Yes | ✅ Yes |
    | Parent re-render (with useCallback([])) | ❌ No | ❌ No |
    | Just user click (no state change) | ❌ No render | ❌ No re-creation |
    - **Common Confusion**
        
        Tu keh raha hai:
        
        > “Parent jab re-render hota hai, to handleClick to dobara define hoga right?
        > 
        > 
        > Phir `useCallback` uska reference kaise same maintain karta hai?
        > 
        > Agar har baar function likh rahe hain to wo naye hi banega na?”
        > 
        
        ### 🔥 TL;DR:
        
        > React internally stores the previous callback and its dependency list.
        On re-render, agar dependencies same hain, toh wo purana function ka reference return kar deta hai. Naya function ban hi nahi raha. ✅
        > 
        
        ---
        
        ## ⚙️ Let’s Go Internal (Step by Step):
        
        ### Code:
        
        ```tsx
        const handleClick = useCallback(() => {
          console.log("clicked");
        }, []);
        ```
        
        ### 🔁 React Render Cycle:
        
        ### 🔹 First Render:
        
        - React calls `useCallback(() => {...}, [])`
        - React:
            - Stores:
                - The function `() => console.log("clicked")`
                - The dependencies `[]`
            - Returns that function
        
        ### 🔹 Second Render (due to state change, etc.):
        
        - React again encounters `useCallback(() => {...}, [])`
        - BUT here's the magic: `() => {...}` is just **syntax**.
        - React doesn’t eagerly create new function reference
        - It compares dependency array (`[]`) with previous one
        
        ### ✅ If deps are **same**:
        
        - React says:
            
            > "Bhai, dependencies same hain, purana function use kar lete hain."
            > 
        - React returns **the exact same function reference** it stored earlier
        - **New function is never created at all** — React bypasses that creation step
        
        ### ❌ If deps are **different**:
        
        - React creates the **new function**
        - Stores that new reference and new deps
        - Returns the new reference
    - **When should we have to useCallback**
        
        ## ✅ Use `useCallback` **ONLY IF:**
        
        ### 1. 🔁 You're Passing Functions to `React.memo`ized Components
        
        ```tsx
        const handleClick = useCallback(() => {
          console.log("clicked");
        }, []);
        
        <ChildComponent onClick={handleClick} /
        ```
        
        - If `ChildComponent` is wrapped in `React.memo`
        - Then stable function reference matters
        - This avoids **unnecessary re-render of child**
        
        > Without useCallback: onClick changes every render → child re-renders
        > 
        > 
        > **With `useCallback`**: `onClick` stays the same → child doesn’t re-render
        > 
        
        ---
        
        ### 2. 🧠 You’re Using That Function Inside `useEffect`, `useMemo`, `useLayoutEffect`
        
        ```tsx
        useEffect(() => {
          doSomethingWithFn(fn);
        }, [fn
        ```
        
        - If `fn` is re-created every render (no useCallback), this effect runs **every time**
        - **Wasteful** if `fn` hasn’t actually changed
        - So memoize with `useCallback`
        
        ---
        
        ### 3. 🧨 Expensive Function Is Being Recreated Each Time (inside loops or big tree)
        
        If your callback does **complex logic, API calls, debouncing**, etc. and is being passed down the tree → stabilize it.
        
        ---
        
        ### 4. 🔄 Debounced/Throttled Functions
        
        ```tsx
        const handleChange = useCallback(debounce((val) => {
          // expensive
        }, 500), []);
        ```
        
        Without `useCallback`, debounced version re-creates every time = **debounce breaks** 💣
        
        ## Standard Strategy: When In Doubt...
        
        | Situation | Should You use `useCallback`? |
        | --- | --- |
        | Passing function to `memo`-ized child | ✅ Yes |
        | Inside `useEffect` or `useMemo` deps | ✅ Yes |
        | Inline handler used once locally | ❌ No |
        | Function is extremely cheap/simple | ❌ No |
        | Using debounce/throttle | ✅ Yes |
        | You don’t understand dependencies | ❌ No (avoid bugs) |
    - **why useEffect Can’t replace useCallback**
        
        Let's say:
        
        ```tsx
        useEffect(() => {
          const fn = () => console.log("clicked");
        }, []);
        ```
        
        This `fn` is scoped **inside** `useEffect` — you can’t **use it outside** (like as a prop)
        
        Also:
        
        - `useEffect` doesn’t **return function references**
        - `useEffect` is **imperative**
        - `useCallback` is **declarative** and can be used **inline** in JSX or dependencies
- **useReducer**:
    - Similar to `useState`, but more suitable for managing complex state logic with multiple sub-values or when the next state depends on the previous one.
    - Example: `const [state, dispatch] = useReducer(reducer, initialState);`
- **useLayoutEffect**:
    - Similar to `useEffect`, but it runs synchronously after all DOM mutations.
    - Example: `useLayoutEffect(() => { console.log('Layout effect'); }, []);`

### Some Standard Questions

- What is Batching? how it improves react state management?
    
    **Batching** in React means combining multiple state updates into a single update to the DOM, instead of applying them one by one. This reduces unnecessary renders and improves performance.
    
    ### How Does Batching Help?
    
    - React avoids re-rendering the component for each state update individually.
    - Instead, it groups all updates in one render cycle, making the app faster and more efficient.
    
    ### Example:
    
    ```jsx
    import React, { useState } from 'react';
    
    function Counter() {
      const [count1, setCount1] = useState(0);
      const [count2, setCount2] = useState(0);
    
      const handleClick = () => {
        setCount1(c => c + 1);
        setCount2(c => c + 1);
      };
    
      return (
        <div>
          <p>Count 1: {count1}</p>
          <p>Count 2: {count2}</p>
          <button onClick={handleClick}>Increment</button>
        </div>
      );
    }
    
    export default Counter;
    ```
    
    ### How It Works:
    
    1. When the button is clicked:
        - `setCount1` updates `count1`.
        - `setCount2` updates `count2`.
    2. React **batches** these updates and re-renders the component only once.
    
    ### Without Batching:
    
    - React would re-render after every state update, causing multiple renders and slower performance.
- Why can’t you update props in React?
    
    You **can't update props** in React because:
    
    > Props are read-only. They are passed from parent to child and not meant to be mutated.
    > 
    
    Props are like function arguments — the child gets them from the parent but **has no right to modify them**. That’s React’s **unidirectional data flow** (aka one-way data binding).
    
    ---
    
    ### 💡 Think of It Like This:
    
    Imagine props like a parcel delivered to your house:
    
    - The courier (parent component) gives it to you (child).
    - You can use it, display it, open it — but **you cannot go and edit what was inside the parcel** and expect it to be reflected back in the sender's system.
    
    ---
    
    ### 🚨 What Happens If You Try to Mutate Props?
    
    ```tsx
    tsx
    CopyEdit
    const MyComponent = (props) => {
      props.title = "Hacked Title"; // ❌ Mutating props directly
      return <h1>{props.title}</h1>;
    };
    
    ```
    
    - 🚫 React will not throw an error *immediately*.
    - But this is **undefined behavior**.
    - You'll face **stale UI**, **unexpected bugs**, and break **React's internal optimization** like memoization and diffing.
    
    ---
    
    ### ✅ The Right Way: **Lift State Up**
    
    If a child needs to modify something, ask the parent to do it.
    
    **Child asks, parent updates the prop**.
    
    ```tsx
    tsx
    CopyEdit
    // Parent
    const Parent = () => {
      const [title, setTitle] = useState("Initial Title");
      return <Child title={title} updateTitle={setTitle} />;
    };
    
    // Child
    const Child = ({ title, updateTitle }) => {
      return (
        <><h1>{title}</h1>
          <button onClick={() => updateTitle("Updated Title")}>
            Update Title
          </button>
        </>
      );
    };
    
    ```
    
    ---
    
    ### 🧠 Why React Designed It This Way
    
    React is built around:
    
    - ✅ Predictable UI
    - ✅ Unidirectional data flow
    - ✅ Immutable state (like Redux)
    - ✅ Easier debugging with traceable data origin
    
    If both parent and child could modify shared data (props), chaos would break out.
    

## Controlled and Uncontrolled diffrence :

| **Factor** | **Controlled** | **Uncontrolled** |
| --- | --- | --- |
| **State Management** | React State (useState) | DOM (Refs - useRef) |
| **Value Access** | `value={state}` se | `ref.current.value` se |
| **Updates** | Real-time (onChange) | On-demand (e.g., submit pe) |
| **Re-renders** | Har change pe re-render | Kam re-renders |
| **Use Case** | Dynamic forms, validation | Simple forms, file inputs |

## Diffrence between dependency and Dev Dependency :

| Feature | Dependency | DevDependency |
| --- | --- | --- |
| **Purpose** | Runtime (user ke liye zaroori) | Development (developer ke liye zaroori) |
| **Examples** | `react`, `axios` | `eslint`, `webpack`, `vite` |
| **Installation** | `npm install` | `npm install --save-dev` |
| **Impact on Build** | Final build ka part hoti hain | Build ke baad include nahi hoti |

### **Q: What is `Hot Module Replacement`?**

A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.

how hmr work ?

1. Jab aap code change karte ho, toh HMR backend (jaise Vite, Webpack) ko batata hai ki ek file change hui hai.
2. Backend sirf updated module ko **browser** tak bhejta hai.
3. Browser puri page reload karne ke bajay sirf updated code ko dynamically load karta hai.
