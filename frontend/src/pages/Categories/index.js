import React from "react";
import { Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BrowserRouter as Router, Link } from "react-router-dom";

const results = [
  {
    id: 1,
    name: "Feature",
    color: "cccccc"
  },
  {
    id: 2,
    name: "Bug",
    color: "eeeeee"
  }
]

export default function Categories(){
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 360 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                Name
              </TableCell>
              <TableCell align="left">
                Color
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((r) => {
              return <TableRow key={r.id}>
                <TableCell align="left">
                  {r.name}
                </TableCell>
                <TableCell align="left">
                  {r.color}
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: "flex",
                  justifyContent: "flex-end"}}>
                    <Link to={`/categories/edit/${r.id}`}
                    key="category-edit">
                      <IconButton
                      size="large">
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton size="large"
                    onClick={null}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}