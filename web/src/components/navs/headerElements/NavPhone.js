import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  primaryOutline: {
    outlineColor: theme.palette.primary.main,
  },
}));

function NavPhone({ text, number }) {
  const classes = useStyles();

  return (
    <>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
        fontWeight="fontWeightBold"
        fontSize="h3.fontSize"
        role="none"
      >
        <Link
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
          className={classes.primaryOutline}
        >
          {text}
        </Link>
      </Box>
      <Box
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}
        fontWeight="fontWeightBold"
        fontSize="h4.fontSize"
        role="none"
      >
        <Link
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
          className={classes.primaryOutline}
        >
          {number}
        </Link>
      </Box>
    </>
  );
}

export default NavPhone;
