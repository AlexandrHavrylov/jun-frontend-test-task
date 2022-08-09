import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { backToStart, subscribe } from "../../redux/horses/horsesSlice";
import RaceTrack from "../RaceTrack/RaceTrack";
import { Button, Wrapper } from "./App.styled";

const socket = io("localhost:3002");

function App() {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses.horses);

  const [isStarted, setIsStarted] = useState(false);

  const isAllFinished = horses
    .map((el) => el.distance)
    .every((el) => el === 1000);

  useEffect(() => {
    if (isAllFinished) {
      socket.disconnect();
    }
  }, [isAllFinished]);

  const startRace = () => {
    socket.connect();
    socket.emit("start");
    socket.on("ticker", (data) => {
      dispatch(subscribe(data));
      setIsStarted(true);
    });
  };

  const restartRace = () => {
    dispatch(backToStart());
    setIsStarted(false);
  };

  return (
    <Wrapper>
      <h1>HORSE RACING</h1>
      <div>
        <Button disabled={isStarted} onClick={startRace}>
          START RACE
        </Button>
        <Button disabled={!isAllFinished} onClick={restartRace}>
          BACK TO START
        </Button>
      </div>
      <RaceTrack />
    </Wrapper>
  );
}

export default App;
