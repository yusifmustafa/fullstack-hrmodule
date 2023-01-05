import React, { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Position = () => {
  const context = useContext(UserContext);
  const { getAllPosition, positions, user, handleOnChange } = context;
  console.log("positions: ", positions);
  console.log("userrrrrrr: ", user);
  useEffect(() => {
    getAllPosition();
  }, []);
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Vəzifəniz</InputLabel>
        <Select
          name="posId"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={(event) =>
            handleOnChange({
              name: event.target.name,
              value: event.target.value,
            })
          }
          value={user.posId ? user.posId : 0}
        >
          {(positions ? positions : []).map((item) => (
            <MenuItem key={item.idposition} value={item.idposition}>
              {item.positionname ? item.positionname : ""}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Position;
