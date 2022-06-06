// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import Typography from '@mui/material/Typography';
import ListContent from '../serializer/ListSerializer';

function SmartUnorderedList({ listItems }) {
  return (
    <ul>
      {listItems.map((li) => (
        <Typography variant="body1" component="li" key={li._key}>
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </ul>
  );
}

export default SmartUnorderedList;
