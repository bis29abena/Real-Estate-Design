import { useState } from "react";
import "./chat.scss";

export default function Chat() {
  const [chat, setChat] = useState<boolean>(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/25677518?v=4"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/25677518?v=4"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/25677518?v=4"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/25677518?v=4"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/25677518?v=4"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://avatars.githubusercontent.com/u/25677518?v=4"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(false)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
