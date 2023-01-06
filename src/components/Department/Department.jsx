import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { useEffect } from "react";

const Department = () => {
  const context = useContext(UserContext);
  const { handleOnChange, user, getAllDepartment, department } = context;
  console.log("department: ", department);

  useEffect(() => {
    getAllDepartment();
  }, []);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Departament daxil edin
        </InputLabel>
        <Select
          name="depId"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Departament"
          onChange={(event) =>
            handleOnChange({
              name: event.target.name,
              value: event.target.value,
            })
          }
          value={user.depId ? user.depId : 0}
        >
          {(department ? department : []).map((item) => (
            <MenuItem key={item.dep_id} value={item.dep_id}>
              {item.dep_title ? item.dep_title : ""}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Department;
