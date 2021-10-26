import React from "react";

type GreetingType = {
  children: React.ReactNode;
  name: string;
  array: {
    firstName: string;
    lastName: string;
  }[];
};

export default function Greeting(props: GreetingType) {
  return (
    <div>
      {props.children} {props.name}{" "}
      {props.array.map((elem) => (
        <h1>
          {elem.firstName} {elem.lastName}
        </h1>
      ))}
    </div>
  );
}
