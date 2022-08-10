import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWinners } from "../../redux/horses/horsesSlice";
import { TableData, TableHead, TableRaw, WinnersTable } from "./Winners.sryled";

export default function Winners() {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.race.horses);
  const winners = useSelector((state) => state.race.winners);

  useEffect(() => {
    horses.forEach((horse) => {
      if (horse.distance === 1000 && !winners.includes(horse.name)) {
        dispatch(setWinners(horse.name));
      }
    });
  }, [horses, winners, dispatch]);

  return (
    <WinnersTable>
      <thead>
        <TableRaw>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
        </TableRaw>
      </thead>
      <tbody>
        {winners?.map((horse, idx) => (
          <TableRaw key={idx}>
            <TableData>{horse}</TableData>
            <TableData>{idx + 1}</TableData>
          </TableRaw>
        ))}
      </tbody>
    </WinnersTable>
  );
}
