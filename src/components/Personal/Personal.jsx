import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();

function Personal() {
  return (
    <div>
      <div className="form">
        <div className="form-group">
          <TextField
            name="surname"
            type="text"
            label="Soyad *"
            variant="standard"
          />
        </div>
        <div className="form-group">
          <TextField name="name" type="text" label="Adı *" variant="standard" />
        </div>
        <div className="form-group">
          <TextField
            name="patronymic"
            type="text"
            label="Ata Adı *"
            variant="standard"
          />
        </div>
        <div className="form-group">
          <TextField
            name="username"
            label="İstifadəçi Adı *"
            variant="standard"
            type="text"
          />
        </div>
        <div className="form-group">
          <TextField
            name="oneCCode"
            type="text"
            variant="standard"
            label="1C Kodu *"
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">
              Vətəndaşlığı təsdiq edən sənəd
            </InputLabel>

            <Select
              name="identification"
              label="Vətəndaşlığı təsdiq edən sənəd"
              variant="standard"
            >
              <MenuItem value="Şəxsiyyət vəsiqəsi">Şəxsiyyət vəsiqəsi</MenuItem>
              <MenuItem value="Pasport">Pasport</MenuItem>
              <MenuItem value="Müvəqqəti Yaşamaq İcazəsi">
                Müvəqqəti Yaşamaq İcazəsi
              </MenuItem>
              <MenuItem value="İş İcazəsi">İş İcazəsi</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="idnumber"
            label="Şəxsiyyət vəsiqəsi nömrəsi *"
            variant="standard"
            type="text"
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthPlace"
            type="text"
            label="Doğum yeri"
            variant="standard"
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthDate"
            label="Doğum tarixi"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 200 }}
            variant="standard"
          />
        </div>
        <div className="form-group">
          <TextField
            name="pincode"
            label="Fin Kodu *"
            variant="standard"
            type="text"
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Qan Qrupu </InputLabel>

            <Select name="bloodGroupId" label="Qan Qrupu" variant="standard">
              <MenuItem value="I Qrup (0 RH +)">I Qrup (0 RH +)</MenuItem>
              <MenuItem value="I Qrup (0 RH -)">I Qrup (0 RH -)</MenuItem>
              <MenuItem value="II Qrup (A RH +)">II Qrup (A RH +) </MenuItem>
              <MenuItem value="II Qrup (A RH -)">II Qrup (A RH -)</MenuItem>
              <MenuItem value="III Qrup (B RH +)">III Qrup (B RH +)</MenuItem>
              <MenuItem value="III Qrup (B RH -)">III Qrup (B RH -)</MenuItem>
              <MenuItem value="IV Qrup (AB RH +)">IV Qrup (AB RH +)</MenuItem>
              <MenuItem value="IV Qrup (AB RH -)">IV Qrup (AB RH -)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">
              Ailə Vəziyyəti{" "}
            </InputLabel>

            <Select
              name="maritalStatus"
              label="Ailə Vəziyyəti"
              variant="standard"
            >
              <MenuItem value="Evli">Evli</MenuItem>
              <MenuItem value="Subay">Subay</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Cinsiyyəti </InputLabel>

            <Select name="gender" label="Cinsiyyəti" variant="standard">
              <MenuItem value="Kişi">Kişi</MenuItem>
              <MenuItem value="Qadın">Qadın</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="citizenship"
            label="Vətəndaşlığı *"
            variant="standard"
            sx={{ width: "200px" }}
            type="text"
          />
        </div>
      </div>
      <Button id="addUser" variant="contained">
        ƏLAVƏ ET
      </Button>
    </div>
  );
}

export default Personal;
