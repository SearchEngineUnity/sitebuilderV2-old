import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.important.bgColor,
    borderColor: theme.palette.hlBox.important.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.important.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.important.iconColor,
  },
  text: {
    color: theme.palette.hlBox.important.textColor,
  },
}));

function HighlightImportant({ blockContent, id }) {
  const { classes } = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <ErrorOutlineOutlinedIcon className={classes.icon} /> Important
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightImportant;
