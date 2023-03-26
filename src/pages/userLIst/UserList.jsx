import "./userList.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        );
      },
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Box sx={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default UserList;
