import React from 'react';
import { navigate } from 'gatsby';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  list: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

const NavGroupHamburger = ({ navGroup, index }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };
  return (
    <>
      {index === 0 ? null : <Divider />}
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItem button onClick={handleClickCollapse}>
          <ListItemText primary={navGroup.title} />
          {collapse ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </ListItem>
      </Box>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        {navGroup.group.map(({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
          <List component="div" disablePadding key={itemKey}>
            <ListItem
              button
              className={classes.nested}
              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
            >
              <ListItemIcon className={classes.icon}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={itemTitle} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default NavGroupHamburger;
