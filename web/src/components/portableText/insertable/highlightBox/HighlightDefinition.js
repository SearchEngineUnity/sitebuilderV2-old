import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.definition.bgColor,
    borderColor: theme.palette.hlBox.definition.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.definition.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.definition.iconColor,
  },
  text: {
    color: theme.palette.hlBox.definition.textColor,
  },
}));

function HighlightDefinition({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <MenuBookIcon className={classes.icon} /> Definition
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightDefinition;
