import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile </button>
          </div>
          <div className="info">
            <span>
              Avatar{" "}
              <img
                src="https://avatars.githubusercontent.com/u/25677518?v=4"
                alt=""
              />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              Email: <b>JohnDoe@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post </button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
