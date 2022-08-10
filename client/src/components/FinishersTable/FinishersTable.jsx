import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFinisher } from "../../redux/horses/horsesSlice";
import { TableData, TableHead, TableRaw, Table } from "./FinishersTable.styled";

export default function FinishersTable() {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.race.horses);
  const finishers = useSelector((state) => state.race.finishers);

  useEffect(() => {
    horses.forEach((horse) => {
      if (horse.distance === 1000 && !finishers.includes(horse.name)) {
        dispatch(addFinisher(horse.name));
      }
    });
  }, [horses, finishers, dispatch]);

  return (
    <Table>
      <thead>
        <TableRaw>
          <TableHead>Name</TableHead>
          <TableHead>Place</TableHead>
        </TableRaw>
      </thead>
      <tbody>
        {finishers?.map((horse, idx) => (
          <TableRaw key={idx}>
            <TableData>{horse}</TableData>
            <TableData>{idx + 1}</TableData>
          </TableRaw>
        ))}
      </tbody>
    </Table>
  );
}
