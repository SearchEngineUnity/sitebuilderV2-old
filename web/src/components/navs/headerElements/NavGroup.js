/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Link from '@mui/material/Link';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { navigate } from 'gatsby';

const NavGroup = ({ title, subGroup, location, position }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div role="none">
      <Link
        ref={anchorRef}
        component="button"
        color="primary"
        onClick={handleToggle}
        type="button"
        style={{ lineHeight: '56px' }}
        role="menuitem"
        aria-controls={open ? title.replace(' ', '-') : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        underline="none"
      >
        <Box fontSize="h4.fontSize">
          {title}
          {open ? (
            <ExpandLessIcon style={{ verticalAlign: 'middle' }} />
          ) : (
            <ExpandMoreIcon style={{ verticalAlign: 'middle' }} />
          )}
        </Box>
      </Link>
      <Popper
        style={{ zIndex: 1900 }}
        open={open}
        anchorEl={anchorRef.current}
        placement={position}
        role={undefined}
        disablePortal
      >
        <Paper role="none">
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              role="menu"
              autoFocusItem={open}
              id={title.replace(' ', '-')}
              // eslint-disable-next-line react/jsx-no-bind
              onKeyDown={handleListKeyDown}
            >
              {subGroup.map(({ icon, title: itemTitle, nav, _key }) => (
                <MenuItem
                  role="menuitem"
                  onClick={() => handleNavigate(nav)}
                  key={_key}
                  selected={`/${nav.slug.current}` === location.pathname}
                >
                  {icon && (
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                  )}
                  <ListItemText primary={itemTitle} />
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default NavGroup;
