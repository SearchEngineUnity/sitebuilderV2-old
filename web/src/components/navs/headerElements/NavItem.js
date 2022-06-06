import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  primaryOutline: {
    outlineColor: theme.palette.primary.main,
  },
}));

function NavItem({ url, title, isButton, location }) {
  const classes = useStyles();
  return (
    <>
      {isButton ? (
        <Button variant="contained" color="primary" to={`/${url}`} role="menuitem">
          <Typography component="span" variant="h4">
            {title}
          </Typography>
        </Button>
      ) : (
        <Box
          fontSize="h4.fontSize"
          fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
          role="none"
        >
          <Link to={`/${url}`} role="menuitem" color="primary" className={classes.primaryOutline}>
            {title}
          </Link>
        </Box>
      )}
    </>
  );
}

export default NavItem;
