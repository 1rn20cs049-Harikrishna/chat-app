import "./App.css";
import ChatPage from "./Components/ChatPage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <h1>MAIN PAGE</h1><br/> */}
      <Sidebar />
      <ChatPage />
    </div>
  );
}

export default App;
