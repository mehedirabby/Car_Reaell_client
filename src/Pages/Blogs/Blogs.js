import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-lime-800">Some Questions!!</h2>
      </div>
      <div tabIndex={0} className="collapse group mt-6">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            Which state management is best in React? React's useState is the
            best option for local state management. If you need a global state
            solution, the most popular ones are Redux, MobX, and the built-in
            Context API. Your choice will depend on the size of your project,
            your needs, and your engineers' expertise.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mt-6">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mt-6">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            Let's start with the definition: Unit testing is a software testing
            method where “units”—the individual components of software—are
            tested. Developers write unit tests for their code to make sure that
            the code works correctly. This helps to detect and protect against
            bugs in the future.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse group mt-6">
        <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
