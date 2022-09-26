// Change code below this line
// see here MyComponent is the name of the reactComponent that we have created,and we know that reactcomponents are nothing but a javascript function returning some html elements i.e.(React Component is nothing but a javascript function returning some html code and all the returned codes must be enclosed withing one html parent.We can create a component for a header,one for body and one for footer i.e. we can target several parts of the webpage separately by creating several components and rendering them at the desired locations on the webpage i.e. a webpage can be broken into several components.We can use the react components as a custom Html tag created i.e. if the name of a react component is Apoorva then we can use it as <Apoorva /> also always remember to declare the name of the react components(i.e. Javascript function name)with first character of name as capital letter.),now angela yu teached us to create react components and implement them as the code i have written below,this is an advanced version and hooks were brought to completely replace class because in class protocol we have to write long codes.

class MyComponent extends React.Component
{
  constructor (props)
  {
    super(props)
  }
  render()
  {
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))

//Equivalent non class protocol code:


import React from "react"
ReactDOM.render()

function Mycomponent()
{
   return(
    <div>
      <h1>My First React Component!</h1>
      </div>
   )
}
ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))

//see the code is so less clumsy in the non class protocol and it is more close to javascrript code as we are not usin any classes to create React componentas.