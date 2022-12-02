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
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";

const DataList = () => {
  const context = useContext(UserContext);
  const StyledTable = styled(Table)`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  `;
  const THead = styled(TableRow)`
    & > th {
      font-size: 20px;
      background: #000;
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
          <TRow>
            <TableCell>1</TableCell>
            <TableCell>Yusu</TableCell>
            <TableCell>Yusif</TableCell>
            <TableCell>Musss</TableCell>
            <TableCell>Kisi</TableCell>
            <TableCell>nanana</TableCell>
            <TableCell>Kapital</TableCell>
            <TableCell>Asan</TableCell>
            <TableCell>
              <Button style={{ marginRight: 10 }}>
                <EditIcon />
              </Button>
              <Button onClick={() => context.openDialog()}>
                <DeleteIcon />
              </Button>
            </TableCell>
          </TRow>
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
