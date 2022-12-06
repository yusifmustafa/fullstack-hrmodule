import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Context/UserContextProvider";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();

const Personal = () => {
  const notify1 = () => toast.success("İstifadəçi əlavə edildi!");

  const context = useContext(UserContext);
  const { handleOnChange, user, updatePerson, getUserInfoById } = context;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUserInfoById(id);
  }, [id]);
  const handleOnSubmit = (user) => {
    console.log("nulluser", user);
    if (user.id === undefined || user.id === 0) {
      context.InsertPerson(user);
      notify1();
      navigate("/");
    } else if (user.id > 0) {
      updatePerson(id, user);
      navigate("/");
    }
  };
  return (
    <div>
      <div className="form">
        <div className="form-group">
          <TextField
            name="name"
            type="text"
            label="Ad *"
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.name ? user.name : ""}
          />
        </div>
        <div className="form-group">
          <TextField
            name="surname"
            type="text"
            label="Soyad *"
            variant="standard"
            onChange={(event) =>
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              })
            }
            value={user.surname ? user.surname : ""}
          />
        </div>
        <div className="form-group">
          <TextField
            name="patronymic"
            type="text"
            label="Ata Adı *"
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.patronymic ? user.patronymic : ""}
          />
        </div>
        <div className="form-group">
          <TextField
            name="username"
            label="İstifadəçi Adı *"
            variant="standard"
            type="text"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.username ? user.username : ""}
          />
        </div>{" "}
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">
              Vətəndaşlığı təsdiq edən sənəd
            </InputLabel>

            <Select
              name="identification"
              label="Vətəndaşlığı təsdiq edən sənəd"
              variant="standard"
              onChange={(event) =>
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                })
              }
              value={user.identification ? user.identification : ""}
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
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.idnumber ? user.idnumber : ""}
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthPlace"
            type="text"
            label="Doğum yeri"
            variant="standard"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.birthPlace ? user.birthPlace : ""}
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
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.birthDate ? user.birthDate : ""}
          />
        </div>
        <div className="form-group">
          <TextField
            name="pincode"
            label="Fin Kodu *"
            variant="standard"
            type="text"
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.pincode ? user.pincode : ""}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Qan Qrupu </InputLabel>

            <Select
              name="bloodGroupId"
              label="Qan Qrupu"
              variant="standard"
              onChange={(event) => {
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
              value={user.bloodGroupId ? user.bloodGroupId : ""}
            >
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
              onChange={(event) => {
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
              value={user.maritalStatus ? user.maritalStatus : ""}
            >
              <MenuItem value="Evli">Evli</MenuItem>
              <MenuItem value="Subay">Subay</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Cinsiyyəti </InputLabel>

            <Select
              name="gender"
              label="Cinsiyyəti"
              variant="standard"
              onChange={(event) => {
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
              value={user.gender ? user.gender : ""}
            >
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
            onChange={(event) => {
              handleOnChange({
                name: event.target.name,
                value: event.target.value,
              });
            }}
            value={user.citizenship ? user.citizenship : ""}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              ŞV Verən Orqan{" "}
            </InputLabel>

            <Select
              name="idprovider"
              variant="standard"
              label="ŞV Verən Orqan"
              onChange={(event) => {
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
              value={user.idprovider ? user.idprovider : ""}
            >
              <MenuItem value="Asan 1">Asan 1</MenuItem>
              <MenuItem value="Asan 2">Asan 2</MenuItem>
              <MenuItem value="Asan 3">Asan 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Hərbi mükəlləfiyyəti
            </InputLabel>

            <Select
              name="militaryStatus"
              variant="standard"
              label="Hərbi mükəlləfiyyət"
              onChange={(event) => {
                handleOnChange({
                  name: event.target.name,
                  value: event.target.value,
                });
              }}
              value={user.militaryStatus ? user.militaryStatus : ""}
            >
              <MenuItem value="H/M">H/M</MenuItem>
              <MenuItem value="Yoxdur">Yoxdur</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Button
        style={{ float: "right", marginRight: "2rem", marginTop: "20px" }}
        variant="contained"
        onClick={() => handleOnSubmit(user)}
      >
        ƏLAVƏ ET
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Personal;
