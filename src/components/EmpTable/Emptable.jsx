import {
  Button,
  Dialog,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteDialog from "./DeleteDialog";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { Link } from "react-router-dom";

const DataList = () => {
  const context = useContext(UserContext);
  const { userList } = context;
  useEffect(() => {
    context.getAllUser();
  }, []);

  const StyledTable = styled(Table)`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  `;
  const THead = styled(TableRow)`
    & > th {
      font-size: 20px;
      background: #1976d2;
      color: #fff;
    }
  `;

  const TRow = styled(TableRow)`
    & > td {
      font-size: 18px;
    }
  `;
  return (
    <div>
      <Navbar />
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>ID</TableCell>
            <TableCell>Adı</TableCell>
            <TableCell>Soyadı</TableCell>
            <TableCell>Ata adı</TableCell>
            <TableCell>İstifadəçi adı</TableCell>
            <TableCell>Cinsi</TableCell>
            <TableCell>ŞV verən orqanın adı</TableCell>
            <TableCell>Vəzifəsi</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {userList?.map((user, key) => (
            <TRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.patronymic}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.idprovider}</TableCell>
              <TableCell>Boşdur</TableCell>
              <TableCell>
                <Link to={`/edit-user/${user.id}`} style={{ marginRight: 10 }}>
                  <EditIcon />
                </Link>
                <Button
                  onClick={() => {
                    context.openDialog(user.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
      <div>
        <Dialog
          open={context.openModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DeleteDialog />
        </Dialog>
      </div>
    </div>
  );
};

export default DataList;
