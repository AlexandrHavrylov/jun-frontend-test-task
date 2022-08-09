import React from "react";
import { useSelector } from "react-redux";
import {
  FinishLine,
  Horse,
  HorseName,
  RaceStrip,
  TrackWrapper,
} from "./RaceTrack.styled";
import { FaHorse } from "react-icons/fa";

export default function RaceTrack() {
  const horses = useSelector((state) => state.horses.horses);
  return (
    <TrackWrapper>
      <ul>
        {horses?.map((horse, idx) => (
          <RaceStrip key={idx}>
            <HorseName>
              {horse.name} : {horse.distance}
            </HorseName>{" "}
            <FinishLine />
            <Horse value={horse.distance}>
              {" "}
              <FaHorse />
            </Horse>
          </RaceStrip>
        ))}
      </ul>
    </TrackWrapper>
  );
}
