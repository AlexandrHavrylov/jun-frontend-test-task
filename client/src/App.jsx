import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { updateData } from "./redux/horsers/horsersSlice";

const soket = io("localhost:3002");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    soket.emit("start");
    soket.on("ticker", (data) => {
      dispatch(updateData(data));
    });
  }, [dispatch]);

  return <div></div>;
}

export default App;
