import React from "react";

export function ChatInput({ onChangeText, sendMessgae, currentText }) {
  return (
    <>
      <input type="text" onChange={onChangeText} value={currentText} />
      <button onClick={sendMessgae}>send</button>
    </>
  );
}
