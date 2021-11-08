import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export default function OnClick(props: ButtonProps) {
  return (
    <div>
      <button onClick={props.handleClick}>{props.children}</button>
    </div>
  );
}
