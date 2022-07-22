/* eslint-disable react/no-array-index-key */
import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BasicTable({ basicTable }) {
  const { colHeading, rowHeading, title, minWidth, colgroup } = basicTable;

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <Box mx="40px" my={2}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label={title} role="table" sx={{ minWidth }}>
          {colgroup && (
            <colgroup>
              {colgroup.map((col, index) =>
                col.width !== '0' ? (
                  <col span="1" style={{ width: col.width }} key={`colWidth-${index}`} />
                ) : (
                  <col key={`colWidth-${index}`} span="1" style={{ width: 'auto' }} />
                ),
              )}
            </colgroup>
          )}
          {colHeading && (
            <TableHead>
              <TableRow key={thead._key}>
                {thead.cells.map((cell, index) =>
                  // eslint-disable-next-line no-nested-ternary
                  !cell ? (
                    <TableCell key={`${thead._key}-${index}`} role="cell" />
                  ) : (
                    <TableCell key={`${thead._key}-${index}`} scope="col" role="columnheader">
                      {cell}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {tbody.map((row) => (
              <TableRow key={row._key}>
                {row.cells.map((cell, index) => {
                  if (rowHeading && index === 0) {
                    return (
                      <TableCell
                        component="th"
                        variant="head"
                        key={`${row._key}-${index}`}
                        scope="row"
                        role="rowheader"
                      >
                        {cell}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={`${row._key}-${index}`} role="cell">
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BasicTable;
