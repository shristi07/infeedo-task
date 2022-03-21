import { useState } from "react";

function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    type: "req",
    text: "",
  });
  const [conversation, setConversation] = useState([]);

  return (
    <>
      {isOpen ? (
        <div className="ChatWindow">
          <div
            onClick={() => setIsOpen(false)}
            className="cancel-btn-container"
          >
            <i
              style={{ fontSize: "15px", color: "white" }}
              className="glyphicon glyphicon-remove"
            ></i>
          </div>
          <div className="ChatWindow-header">
            <div>
              <h4>IRIS</h4>
              <h5>Hello</h5>
              <h6>
                I am Iris, a virtual assistant <br /> How may I help you?
              </h6>
            </div>
          </div>
          <div className="ChatWindow-body">
            <div className="avatar">
              <i className=" profile glyphicon glyphicon-user"></i>
            </div>
            <div className="chat">
              {conversation?.map((item) => (
                <div
                  className="text-row"
                  style={{
                    justifyContent:
                      item?.type == "res" ? "flex-start" : "flex-end",
                  }}
                >
                  {" "}
                  <div
                    className={`${
                      item?.type == "res" ? "response" : "request"
                    } text-container`}
                  >
                    {item?.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="user-input">
              <input
                placeholder={"Type a message ..."}
                onChange={(e) => {
                  setUserInput({ ...userInput, text: e.target.value });
                }}
                value={userInput.text}
                type="text"
              />
              <button
                onClick={() => {
                  setConversation([...conversation, userInput]);
                  setUserInput({ ...userInput, text: "" });
                  setTimeout(() => {
                    setConversation([
                      ...conversation,
                      { ...userInput, type: "req" },
                      { ...userInput, type: "res" },
                    ]);
                  }, 1500);
                }}
              >
                <i className=" send glyphicon glyphicon-send"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <span className="myLabel">Try me! Happy to Help.</span>
          <div onClick={() => setIsOpen(true)} className="myIcon">
            <i className=" profile glyphicon glyphicon-user"></i>
          </div>
        </>
      )}
    </>
  );
}

export default ChatWindow;
