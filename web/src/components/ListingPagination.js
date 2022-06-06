import React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from 'gatsby';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

function ListingPagination({ currentpage, numPages, slug, color }) {
  const prevTheme = useTheme();

  const theme = createTheme({
    typography: prevTheme.typography,
    palette: {
      action: {
        selected: color
          ? `rgba(${color._rawRgb.r}, ${color._rawRgb.g}, ${color._rawRgb.b}, 0.08)`
          : 'rgba(0, 0, 0, 0.08)',
        focus: color
          ? `rgba(${color._rawRgb.r}, ${color._rawRgb.g}, ${color._rawRgb.b}, 0.12)`
          : 'rgba(0, 0, 0, 0.12)',
        hover: color
          ? `rgba(${color._rawRgb.r}, ${color._rawRgb.g}, ${color._rawRgb.b}, 0.04)`
          : 'rgba(0, 0, 0, 0.04)',
      },
      text: {
        primary: color
          ? `rgba(${color._rawRgb.r}, ${color._rawRgb.g}, ${color._rawRgb.b}, ${color._rawRgb.a})`
          : 'rgba(0, 0, 0, 1)',
      },
    },
    overrides: {
      MuiPaginationItem: {
        outlined: {
          border: color
            ? `1px solid rgba(${color._rawRgb.r}, ${color._rawRgb.g}, ${color._rawRgb.b}, 0.23)`
            : '1px solid rgba(0, 0, 0, 0.23)',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box mt={3}>
        <Pagination
          page={currentpage}
          count={numPages}
          variant="outlined"
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${slug}${item.page === 1 ? '' : `/${item.page}`}`}
              {...item}
            />
          )}
        />
      </Box>
    </ThemeProvider>
  );
}

export default ListingPagination;
