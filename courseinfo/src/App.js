import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totals[0].exercises+props.totals[1].exercises+props.totals[2].exercises}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

 const Content = (props) => {
   return (
     <div>
       <Part part={props.pa[0]} />
       <Part part={props.pa[1]} />
       <Part part={props.pa[2]} />
     </div>
   );
 };

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    }
  ];

 

  return (
    <div>
      <Header course={course} />
      <Content pa = {parts}/>
      <Total totals={parts} />
    </div>
  );
};

export default App;
