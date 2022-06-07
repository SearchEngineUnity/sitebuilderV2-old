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
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  table: (props) => ({
    tableLayout: 'fixed',
    minWidth: props.minWidth,
  }),
  row: {
    verticalAlign: 'top',
  },
});

function BasicTable({ basicTable }) {
  const { colHeading, rowHeading, title, minWidth, colgroup } = basicTable;
  const classes = useStyles({ minWidth });

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <Box mx="40px" my={2}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label={title} role="table">
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
                    <td key={`${thead._key}-${index}`} role="cell" />
                  ) : (
                    <TableCell
                      key={`${thead._key}-${index}`}
                      scope="col"
                      role="columnheader"
                      style={{ overflow: 'hidden' }}
                    >
                      {cell}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {tbody.map((row) => (
              <TableRow key={row._key} className={classes.row}>
                {row.cells.map((cell, index) => {
                  if (rowHeading && index === 0) {
                    return (
                      <TableCell
                        className="MuiTableCell-head"
                        component="th"
                        key={`${row._key}-${index}`}
                        scope="row"
                        role="rowheader"
                        style={{ overflow: 'hidden' }}
                      >
                        {cell}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      key={`${row._key}-${index}`}
                      style={{ overflow: 'hidden' }}
                      role="cell"
                    >
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
