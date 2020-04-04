import React, { useState } from "react";

const InputField = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        value={input}
        placeholder="numbers"
        type="numbers"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
