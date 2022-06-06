import React from 'react';
import Box from '@mui/material/Box';
import HighlightProTip from './HighlightProTip';
import HighlightImportant from './HighlightImportant';
import HighlightWarning from './HighlightWarning';
import HighlightDidYouKnow from './HighlightDidYouKnow';
import HighlightDefinition from './HighlightDefinition';

const HighlightBox = ({ box }) => {
  switch (box.type) {
    case 'Pro Tip':
      return (
        <Box mx="40px" my={2}>
          <HighlightProTip blockContent={box.text} id={box._key} />
        </Box>
      );

    case 'Important':
      return (
        <Box mx="40px" my={2}>
          <HighlightImportant blockContent={box.text} id={box._key} />
        </Box>
      );

    case 'Warning':
      return (
        <Box mx="40px" my={2}>
          <HighlightWarning blockContent={box.text} id={box._key} />
        </Box>
      );

    case 'Did You Know':
      return (
        <Box mx="40px" my={2}>
          <HighlightDidYouKnow blockContent={box.text} id={box._key} />
        </Box>
      );

    case 'Definition':
      return (
        <Box mx="40px" my={2}>
          <HighlightDefinition blockContent={box.text} id={box._key} />
        </Box>
      );

    default:
      return <h3>Undefined Highlight Box</h3>;
  }
};

export default HighlightBox;
