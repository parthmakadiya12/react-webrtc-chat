import React from "react";

export function ChatInput({ onChangeText, sendMessgae, currentText }) {
  return (
    <>
      <input
        type="text"
        onChange={onChangeText}
        onKeyDown={(e) => e.key === "Enter" && sendMessgae()}
        value={currentText}
      />
      <button onClick={sendMessgae}>send</button>
    </>
  );
}
