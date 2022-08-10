import React from "react";
import { useSelector } from "react-redux";
import {
  FinishLine,
  Horse,
  HorseName,
  RaceStrip,
  RaceStripsList,
  TrackWrapper,
} from "./RaceTrack.styled";
import { FaHorse } from "react-icons/fa";
import Winners from "../Winners/Winners";

export default function RaceTrack() {
  const horses = useSelector((state) => state.race.horses);

  return (
    <TrackWrapper>
      <RaceStripsList>
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
      </RaceStripsList>
      <Winners />
    </TrackWrapper>
  );
}
