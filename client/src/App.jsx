import { io } from "socket.io-client";
import axios from "axios";
import { useState } from "react";

function App() {
  const conectSoket = () => {
    io("localhost:3002");
  };

  const [Data, setData] = useState("");
  const getData = async () => {
    const data = await axios.get("http://localhost:3002");
    console.log(data);
    setData(data);
    return data;
  };
  return (
    <div>
      Hello
      <button onClick={conectSoket}>Connect</button>;
      <button onClick={getData}>Data</button>;
    </div>
  );
}

export default App;
