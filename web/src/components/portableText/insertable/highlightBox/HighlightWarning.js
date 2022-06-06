import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.warning.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.warning.iconColor,
  },
  text: {
    color: theme.palette.hlBox.warning.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightWarning({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <WarningAmberOutlinedIcon className={classes.icon} /> Warning
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightWarning;
