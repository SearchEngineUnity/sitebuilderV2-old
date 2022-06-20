import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import GavelIcon from '@mui/icons-material/Gavel';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.disclaimer.bgColor,
    borderColor: theme.palette.hlBox.disclaimer.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.disclaimer.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.disclaimer.iconColor,
  },
  text: {
    color: theme.palette.hlBox.disclaimer.textColor,
  },
}));

function HighlightDisclaimer({ blockContent, id }) {
  const { classes } = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <GavelIcon className={classes.icon} /> Disclaimer
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightDisclaimer;
