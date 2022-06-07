import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.proTip.bgColor,
    borderColor: theme.palette.hlBox.proTip.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.proTip.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.proTip.iconColor,
  },
  text: {
    color: theme.palette.hlBox.proTip.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightProTip({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <ThumbUpOutlinedIcon className={classes.icon} /> Pro Tip
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightProTip;
