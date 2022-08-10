import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RaceTrack from "../RaceTrack/RaceTrack";
import {
  backToStart,
  resetFinishers,
  subscribe,
} from "../../redux/horses/horsesSlice";
import { io } from "socket.io-client";

import { Button, Wrapper } from "./App.styled";

const RACE_SOCKET_URL = "localhost:3002";

const socket = io(`${RACE_SOCKET_URL}`);

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.race.horses);

  const isAllFinished = useMemo(
    () => horses.every((horse) => horse.distance === 1000),
    [horses]
  );

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isAllFinished) {
      socket.disconnect();
    }
  }, [isAllFinished]);

  const startRace = useCallback(() => {
    dispatch(resetFinishers());
    socket.connect();
    socket.emit("start");
    socket.on("ticker", (data) => {
      dispatch(subscribe(data));
      setIsStarted(true);
    });
  }, [dispatch]);

  const restartRace = useCallback(() => {
    dispatch(backToStart());
    dispatch(resetFinishers());
    setIsStarted(false);
    socket.disconnect();
  }, [dispatch]);

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
        <Button onClick={restartRace}>RESET</Button>
      </div>
      <RaceTrack />
    </Wrapper>
  );
}

export default App;
