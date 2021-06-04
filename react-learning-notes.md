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