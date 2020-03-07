import React from 'react';
import {makeStyles, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyle = makeStyles(theme => ({
    list: {
        width: "250px",
    },
}));

const SideBar=({open,onOpen,onClose,movePage,listContent})=>{
    const classes=useStyle();
    return (
        <div>
            <SwipeableDrawer open={open}
                onOpen={onOpen}
                onClose={onClose}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={onClose}
                    onKeyDown={onClose}
                    className={classes.list}
                >
                    <List>
                        {listContent.map((v, i) => (
                            <ListItem button key={i} onClick={movePage(v.path)}>
                                <ListItemIcon>{v.icon}</ListItemIcon>
                                <ListItemText primary={v.text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

SideBar.propTypes={
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    movePage: PropTypes.func.isRequired,
    listContent: PropTypes.array.isRequired,
};

export default SideBar;