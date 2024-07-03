// DataTable.tsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { DataTableProps } from '../interface/Cat.interface';

const DataTable: React.FC<DataTableProps> = ({ tableData,handleOpen }) => {

  return (
    <div>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Typography variant="h5" style={{ textAlign: 'center', margin: '10px 0' }}>
          Data Overview: Height, Width, and Image
        </Typography>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell>Width</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.id} >
                <TableCell sx={{cursor:"pointer"}} onClick={() => handleOpen(item,'height')}>{item.height}</TableCell>
                <TableCell onClick={() => handleOpen(item,'width')}>{item.width}</TableCell>
                <TableCell>
                  <img src={item.url} height={50} width={50} alt={item.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
    </div>
  );
};

export default DataTable;
