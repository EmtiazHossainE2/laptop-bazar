import React from 'react';
import './ReactQuestion.css'

const ReactQuestion = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row ">
                    <div className="col-lg-9">
                        <h2 className='text-center my-5'>React Basic Interview Question </h2>
                        <div className="row question">
                            <div className="col-lg-4 ">
                                <div className="cart-1">
                                    <h5>How does React work ?</h5>
                                    <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart-2">
                                    <h5> How useState works ?</h5>
                                    <p>useState allows us to have state variables in the JSX functional component.we pass an initial value and it returns a variable with a new state based on functional logic.Unlike with classes, the state doesn't have to be an object.We can keep a number or a string if that's all we need.we can  pass 0 as initial state for our variable or an empty array and returns an array of two entries.The first element is the initial state and the second one is a function that is used for updating the state.We can use many time if needed .
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart-3">
                                    <h5>What is the difference between props and state?</h5>
                                    <p>We can create, handle, or manage our data within the component using the state object.Props are variables passed  its parent component. State is also a variables, but directly initialized and managed by the component.
                                        We can combine both the state and props within our application in ReactJS.
                                        State needs to be set within our parent component and passed as the props within the child component.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default ReactQuestion;