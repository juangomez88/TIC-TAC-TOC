import './App.css';
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import { StreamChat } from "stream-chat";
import Cookies from 'universal-cookie';

function App() {

  const api_key = "stww46cp4uv3";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);

  if(token) {
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
      firstName: cookies.get("firstName"),
      lastname: cookies.get("lastName"),
      hashedPassword: cookies.get("hashedPassword"),
    }, 
    token
    ).then((user) => {
      console.log(user);
    });
  }

  return (
    <div className="App">
      <SingUp/>
      <Login/>
    </div>
  );
}

export default App;
