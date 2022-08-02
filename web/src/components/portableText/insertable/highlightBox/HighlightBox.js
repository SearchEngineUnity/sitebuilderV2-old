import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HighlightBoxIcon from './HighlightBoxIcon';
import TextContent from '../../serializer/HighlightBoxSerializer';

const HighlightBox = ({ box }) => {
  const hlbTypes = {
    proTip: 'Pro Tip',
    important: 'Important',
    warning: 'Warning',
    dyk: 'Did You Know',
    definition: 'Definition',
    disclaimer: 'Disclaimer',
  };

  const { id, type, text } = box;

  return (
    <Paper
      variant="outlined"
      key={id}
      sx={[
        {
          my: 2,
          mx: '40px',
          p: 2,
          bgcolor: `hlBox.${type}.bgColor`,
          color: `hlBox.${type}.textColor`,
          borderColor: `hlBox.${type}.borderColor`,
        },
        (theme) => ({
          '& .pt-link': {
            color: theme.palette.hlBox[type]?.linkColor,
            textDecorationColor: theme.palette.hlBox[type]?.linkColor,
          },
        }),
      ]}
    >
      <Typography component="p" variant="h4">
        <HighlightBoxIcon color={`hlBox.${type}.iconColor`} type={type} /> {hlbTypes[type]}
      </Typography>
      <div>
        <TextContent blocks={text} />
      </div>
    </Paper>
  );
};

export default HighlightBox;
