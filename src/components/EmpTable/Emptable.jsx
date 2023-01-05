import {
  Button,
  CircularProgress,
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
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContextProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DataList = () => {
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Silmək İstədiyinizə Əminsinizmi?",
      text: "Silinən məlumatı geri qaytarmaq mümkün deyil!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sil",
      cancelButtonText: "Geri Qayıt",
    }).then((result) => {
      if (result.isConfirmed) {
        context.deleteUser(id);
        Swal.fire(`İstifadəçi silindi!`);
      }
    });
  };

  const context = useContext(UserContext);
  const { userList } = context;


  console.log("userList: ", userList);
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
            <TableCell>Vəzifəsi</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {userList ? (
            userList.map((user,key) => (
              <TRow key={user?.id}>
                <TableCell>{user?.id}</TableCell>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.surname}</TableCell>
                <TableCell>{user?.patronymic}</TableCell>
                <TableCell>{user?.username}</TableCell>
                <TableCell>{user.gender? user.gender : "Seçilməyib"}</TableCell>
                <TableCell>{user?.positionname}</TableCell>
                <TableCell>
                  <Link
                    to={`/edit-user/${user.id}`}
                    style={{ marginRight: 10 }}
                  >
                    <EditIcon />
                  </Link>
                  <Button
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TRow>
            ))
          ) : (
            <CircularProgress />
          )}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default DataList;
