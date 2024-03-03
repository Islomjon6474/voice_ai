import React, { useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { observer } from "mobx-react";
import { useProjectStore } from "../stores/nodes-store";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import cs from "classnames";

const Chat = observer(({ data, id }) => {
  const nodeStore = useProjectStore();
  const inputRef = useRef(null);

  const { messages } = nodeStore;

  const sendMessage = () => {
    const message = {
      id: messages.length + 1,
      text: inputRef.current.value,
      type: "operator",
    };
    inputRef.current.value = "";
    nodeStore.addMessage(message);
  };

  return (
    <div
      className={`w-[30%] h-fit !max-h-[50vh] m-5 rounded-2xl overflow-hidden bg-[#DBE9F2] `}
    >
      <div className="flex w-full gap-2 bg-red h-fit justify-between p-2">
        <h3 className={`text-white text-3xl`}>Conversation</h3>
      </div>
      <div className=" max-h-full h-[40vh] overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#161B22]">
        {messages.map(({ id, text, type }, index) => {
          const alignmentClass = type === "user" ? "float-left" : "float-right";
          return (
            <div
              key={index}
              className={cs(
                ` flex flex-col rounded-xl items-start p-2 m-2 w-1/2 max-w-1/2 ${alignmentClass}`,
                type === "operator"
                  ? "rounded-br-none bg-[#009AE6] text-white"
                  : "rounded-bl-none bg-white text-black"
              )}
            >
              <span className={`capitalize opacity-50`}>{type}</span>
              <p className={`text-left`}>{text}</p>
            </div>
          );
        })}
      </div>
      <div className="flex w-full gap-2 bg-[#DBE9F2] shadow-2xl  h-fit justify-between p-2">
        <input
          ref={inputRef}
          type="text"
          className="w-4/5 p-2 rounded bg-transparent border-none outline-0"
          placeholder="Type a message"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          onClick={() => sendMessage()}
          className="w-fit bg-transparent text-white flex justify-center items-center rounded p-2"
        >
          <PaperAirplaneIcon className="h-7 w-7 text-[#009AE6]" />
        </button>
      </div>
    </div>
  );
});

export default Chat;
