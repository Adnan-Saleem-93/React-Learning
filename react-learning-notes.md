<!-- prettier-ignore -->
1.  ReactDOM.render is used to render an app as a React App e.g.,

```javascript
ReactDOM.render( <App />, document.getElementById('root') );
```
in this example, the render method renders the App component in the HTML element whose ID is 'root'

2.  React uses functions called components to render elements on page components are used as

```HTML
<Component />
```
OR
```HTML
<Component></Component>
```

Components must be in PascalCase.

3.  HTML Elements can be created using simple HTML syntax or by using _`React.createElement`_, _`React.cloneElement`_ etc. similarly to javascript

4.  Code written inside a component's return method is called JSX, which contains HTML and javascript.

5.  JSX has a certain set of rules: 
    - If there are more than one HTML elements being returned from JSX, they must be wrapped in a parent element like a div, article, section etc. 
    - React has its own element that can be used to wrap code called React.Fragment which can be used like,

        1. ```HTML
            <React.Fragment>
            // any html goes here 
            </React.Fragment>
            ```

        2. short syntax
        
            ```HTML
            <>
            // html goes here
            </>
            ```          
            this can prevent creation of unnecessary divs, articles and sections in the browser's html as React.Fragment in not actually rendered in the browser.

    - 'class' is reserved word in React, so to use HTML class attribute, we use 'className' 
    - style attribute is treated as an object in React so it must contain CSS properties as an object of key/value pairs
    - variables, arrays, objects or any JS-related code must be wrapped inside curly {} braces 
    - CSS properties and HTML attributes that contain hyphens(-) must be used in camelCase
    e.g.,
    
    _`style={{fontSize:10}}`_ 
    or
    _`dataName="example"`_

6.  React components are like functions, that is, arguments can be passed to them. To pass an argument, simply give it a key and value.
e.g., 

```HTML
<Example name="John Doe"/>
```

here "name" is an argument

7.  To use the passed arguments, React provide a special object called 'props', which contains all the passed key/values. e.g., 'props.name' accesses the 'name' argument passed in 'Example' component.

8.  Components can have children elements (html or other components) as well, which are provided as:

```HTML
<Example> <h1>Hello World</h1> </Example>
```
To access the children elements/components of Example, we use a special property of the 'props' object called 'children'. e.g., props.children will render everything inside the Example component above,

_`<h1>Hello World</h1>`_ in this case.

9.  Component can be used in loops (for, map, each etc.). To give a unique identity to each component in that loop of components, React provide the "key" keyword. It can be helpful when we want to perform some change or action on a specific component in a list of components.

10. In React, events such as onclick, onchange are used with camelCase, such as, onClick, onChange There are three ways to handle events: 
    - inline function ->
    
    _`onClick={()=> //do something here}`_
    
    - reference other functions ->
    
    _`onClick={handleClick}`_
    
    handleClick is a function being reference here, so when onClick event occurs, the code inside handleClick will be executed.
    - When using the reference method, if the referenced function required arguments, then we need to call the referenced function inside an inline function
    e.g.,
    
    _`onClick={()=> handleClick(someArgument)}`_
    

Using _`onClick={handleClick(someArgument)}`_ will execute the handleClick function's code on component rendering, without waiting for the onClick event to occur.

11.**UseState Basics** => 
When dealing with dynamic data or updating UI on some event, useState Hook is used. UseState hook consists of two parts: 1. state, 2. a method to update state. 
e.g.,

```javascript 
let [count, setCount] = React.useState(0)
``` 
here, 'count' is a state variable 'setCount' is the method to update 'count' state

12. **UseState Arrays** =>
when dealing with arrays in state:
    - Add new item : in order to add new item in state array, 
        - first duplicate the array into a new array by using spread operator. (using, `let newArray = oldArray` will result in an error as 'newArray' will get reference of 'oldArray' and try to update that).
        - then add/push new item in the new array 
        - then pass this new, updated array in the array state's handler method. 
        <br/> 
        e.g,

        ```javascript 
        setArray(newArray) 
        ```
        
    - To remove an item from the array, create a new array and remove the desired item from it, then do,
    
    ```javascript 
    setArray(filteredArray)
    ```
    
    - To clear all values in an array, just do
    
    ```javascript 
    setArray([])
    ```

13. In React, we can use 'bootstrap' and React's own 'react-bootstrap' libraries for styling or any other libraries of choice

14. **UseState - Object** =>
when dealing with objects in state:  
There are two ways to update any property in the object:
setState({...state, key1: value}). spread (...), then update key1's value only
```javascript
    let newObject = {...state} // duplicate object in state
    newObject.key1 = value // update key1's value
    setState(newObject) // then pass new object in state handler method`
```    
UseState - Object is useful when we need to have multiple dynamic values. We can put them in an object and use one state handler method to update all of them, resulting in cleaner code.

15. **UseState - Functional Update Form** =>

since state update happens asynchronously in React, So it is possible that there would be old value in the closure of the state update handler method Functional Update Form is useful when multiple events to update the same state value occur, and we want each of those to state update events to update the latest value.

16. **UseEffect - Basics** =>

useEffect Hook lets us hook into the react side-effects operations We usually place the functionality in useEffect hook, which we want React to execute when a component renders/re-renders By default, useEffect hook is called on each re-render of a component.

17. **UseEffect - Conditionals** =>

As a general rule of React, we cannot place Hooks in conditional statements, however we can put conditional statements inside the useEffect hook, if we want to do something if a certain condition matches

18. **UseEffect - Dependency list** => 

The dependency array is the second optional argument in the UseEffect Hook, (the first being the callback function, where we put our code) The dependency array lets you specify the conditions to trigger it. if we want a side-effect to occur only once (on initial render), we pass an empty array [] if we want a side-effect to occur when some value(s) change(s), we pass that value in the dependency array like 
<br/>

```javascript
useEffect(callback,[someValue])
```
This is particularly useful when we update state in useEffect. Updating the state causes a re-render and as mentioned previously every re-render generates a side-effect, thus, this will lead to an infinite loop

19. **UseEffect - Cleanup Function** =>

The useEffect hook has a cleanup function that works in a similar fashion as 'componentWillUnmount' lifecycle method but they are not the same thing. It is particularly used to unsubscribe from APIs, avoid race conditions in async requests, remove event listeners when dealing with components that appear/disappear (mount/unmount) conditionally to avoid memory leaks.

- the cleanup function does not execute on initial rendering of component. Instead, it runs only on re-renders.
- this function is executed before the side-effect executes.
- when component re-renders, the cleanup function will have previous state value instead of the latest.

20. **UseEffect - Fetching Data** =>
- when making requests to APIs to fetch data, async/await should not be applied to the useEffect callback function. Doing this will in result in the warning "Effect callbacks are synchronous to prevent race conditions".
- to make async requests with useEffect, either use an async function inside the useEffect callback function or use an external async function and call it from useEffect.

21. **Conditional Rendering/Multiple Returns** =>
- In React, we can return a different render based on certain conditions.

22. **Forms** =>
- In React, forms mostly work the same as HTML.
- for the "label" tag, we use 'htmlFor' instead of the 'for' attribute

23. **Forms - Controlled Inputs** =>
- in react, we can control inputs by connecting it to the component's state value.
- controlled input is an input that gets its value from a single source of truth (the state value).
- using controlled input, we stay in charge of how our input is handled as opposed to letting the browser handle the input's behaviour.
- when we connect an input's value to the state value, it stays whatever value we have in the state. Typing anything in the input form will not change it's value because it is being controlled by the state. So, to update a controlled input's value, we need to use the onChange method to update the state value, which will result in the input's value being updated.
- Multiple Inputs - used dynamic object properties to handle change of multiple inputs in one handler function

24. **UseRef**
- used for creating mutable "ref" object and/or accessing DOM elements
- does not trigger re-rendering of component
- *Usage*: 
  ```javascript 
    const someRef = useRef(initialValue) 
    ```
- *Accessing DOM elements* : 
    - "ref" attribute is used to hold a reference of a DOM element.
    - _`<input className="someInput" ref={exampleRef}/>`_
    - Example: exampleRef.current.focus() will focus the input
    - equivalent of document.querySelector('.someInput').focus()
- *Storing mutable objects/values* :
    - can be used to store mutable persistant objects/values
    - these persistant values won't reset after re-renders
- persists between re-renders (it's current property remains same even if component re-renders)

25. **ForwardRef**
- useRef objects can be passed as props to other components.
    e.g. `<SomeComponent ref={someRef} />`
- to access the passed ref, other components need to use the forwardRef() method which receive the other props in the "props" object and the ref in the "ref" object.
    e.g. `const SomeComponent = React.forwardRef((props,ref)=>{});`
- then the ref object can be used the same way in the 'SomeComponent' component.

26. **UseReducer**
- used particularly for large scale, complex applications.
- similar to useState, however, it takes a "reducer" function (where all the state handling is performed) as its first argument and the very initial state as its second argument.
- useReducer provides two objects, "state" object and "dispatch" method.
    - state contains components state values.
    - dispatch is invoked to update the state, similar to setState in useState.
    - dispatch calls the "reducer" function.
    - reducer function carries two parameters, state and action.
        - state is where the current state of the component is passed (before it is updated).
        - action object is used to decide what we should be updated in the state.
            - action has two properties, "type" and "payload" (optional)
            - using 'type', we decide what to update in the state,
            - 'payload' is used to add/delete/update something in the state.

27. **UseContext/Context API**
- used to avoid prop drilling (i.e., passing down state values as props to child components).
- helpful if we have a lot of components
- Wrap top/parent component in createContext object's Provider property and add state value or any other value which needs to be passed down to child components.
    e.g., 
    ```javascript
    const Context = React.createContext(defaultValue); 
    const App(){
        return(
            <Context.Provider value='hello'>
            <SubComponent/>
            </Context.Provider>
        )
    }
    ```
- the value 'hello' can be accessed by any sub component of App Component using useContext().
    e.g.,
    ```javascript
    const SubComponent(){
        const value = useContext(Context);
        return(
            <h1>{value}</h1> 
            // renders "hello"
        )
    }
    ```
- The object "Context" created using createContext needs to be accessible by the sub-components

28. **Custom Hooks**
- we can create custom hooks for a reusable part of our code. If some similar functionality is being used in multiple places, we can create custom hooks to centralize that functionality.

29. **Prop Types**
- used for type-checking and making sure the correct type of value is supplied to the 'props' of a component.
- It also makes sure, a required prop is supplied to a component.
- If some prop, whose is required and receives a certain type of value, is not passed to a component, we can use the 'defaultProps' object to assign default values to the props.

29. **React Router**
- used for navigation between different pages in an application.
- wrap App component or Top most component in the <BrowserRouter> component of *react-router-dom* to enable routing in the entire application.
- wrap your components in the <Route path="/about"> component of *react-router-dom* to help react-reacter identify which component should be rendered using the "path" attribute.
- to avoid rendering of multiple components, whose paths are identical or if one path partially matches another path, we add the 'exact' attribute like <Route exact>
    e.g., if you have a '/' path for *home* component and another path '/about' for the *about* component, react-router will see that the *home* component's path '/' partially exists in the '/about', so it will render the *home* component alongside the *about* component. The *exact* attribute will tell react-router to only render the component whose exact route is matched.
- if a path, which does not have any component associated with it, is entered, we can add a route with the "*" (all) path to show any error page to the user if he/she goes to an invalid URL.
- the downside of using the "*" is that, it's component will get rendered with valid URLs as well. To avoid this, we wrap the <Route> component in the <Switch> componnent of react-router-dom. The Switch component will only render the first component from the matched URLs.