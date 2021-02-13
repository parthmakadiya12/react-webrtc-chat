import React from "react";

export function RenderChat({ chat }) {
  return (
    <>
      {console.log(chat)}
      {chat.map((i) => {
        return (
          <div key={i.text}>
            <div>
              {i.user} : {i.text}
            </div>
          </div>
        );
      })}
    </>
  );
}
