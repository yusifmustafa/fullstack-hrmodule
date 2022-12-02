import "./Emptable.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";

function Tablelist() {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [searchTab, setSearchTab] = useState("");

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = data.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div className="tablelist">
      <Navbar />
      <table className="table table-striped">
        <thead>
          <tr className="user-about">
            <th scope="col">ID</th>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">Ata adı</th>
            <th scope="col">İstifadəçi adı</th>
            <th scope="col">Vəzifəsi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>yus</td>
            <td>mus</td>
            <td>an</td>
            <td>yumus</td>
            <td>aaaaaa</td>
            <td style={{ display: "flex",justifyContent:"center" }}>
              <div>
                <Button>
                  <span>
                    <DeleteIcon />
                  </span>
                </Button>
              </div>
              <div>
                <Button>
                  <span>
                    <EditIcon />
                  </span>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tablelist;
