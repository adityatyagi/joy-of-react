import React from "react";

// This component uses a technique known as
// “prop delegation”. We'll learn more about it
// in Module 4!

export interface TextInput {
  id: string;
  label: string;
  [x: string]: any;
}

function TextInput({ id, label, ...delegated }: TextInput) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>{" "}
      <input id={appliedId} {...delegated} />
    </>
  );
}

export default TextInput;
