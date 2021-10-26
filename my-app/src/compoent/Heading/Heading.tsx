import { type } from "os";
import React from "react";

type headingType = {
  greeting: string;
};

export default function Heading(props: headingType) {
  return <div>{props.greeting}</div>;
}
