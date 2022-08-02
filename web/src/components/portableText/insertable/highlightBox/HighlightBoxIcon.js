import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GavelIcon from '@mui/icons-material/Gavel';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

const HighlightBoxIcon = ({ type, color }) => {
  switch (type) {
    case 'proTip':
      return <ThumbUpOutlinedIcon sx={{ color }} />;
    case 'important':
      return <ErrorOutlineOutlinedIcon sx={{ color }} />;
    case 'warning':
      return <WarningAmberOutlinedIcon sx={{ color }} />;
    case 'dyk':
      return <EmojiObjectsOutlinedIcon sx={{ color }} />;
    case 'definition':
      return <MenuBookIcon sx={{ color }} />;
    case 'disclaimer':
      return <GavelIcon sx={{ color }} />;

    default:
      return <div>No icon</div>;
  }
};

export default HighlightBoxIcon;
