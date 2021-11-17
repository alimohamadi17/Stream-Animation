import * as React from 'react';
import Box from '@material-ui/core/Box/Box';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import Divider from '@material-ui/core/Divider/Divider';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import { RiMenu4Line } from 'react-icons/ri';
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { AiOutlineClose } from 'react-icons/ai'


const useStyles = makeStyles({
    list: {
        width: 300
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "rgb(24,24,23)",
        color: '#fff',
        fontSize: '40px',
        letterSpacing: '1.5px',
        textTransform: "uppercase",
    }
});


function Drawers() {
    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const listitem = [
        {
            text: <AiOutlineClose style={{ float: "right", color: 'white', fontSize: '30px' }} />,
        },
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'Service',
            path: '/Services'
        },
        {
            text: 'Work',
            path: '/Work'
        },
        {
            text: 'In Progress',
            path: '/InProgress'
        },
        {
            text: 'About',
            path: '/About'
        },
        {
            text: 'Contact',
            path: '/Contact'
        },
    ]
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {listitem.map((item, index) => {
                    return (
                        <ListItem button key={item.index} onClick={() => history.push(item.path)}>

                            <ListItemText primary={item.text} />

                        </ListItem>
                    )
                })}

            </List>
            <Divider />

        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{<RiMenu4Line className='icon' />}</Button>
                    <Drawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}

        </div>
    );
}

export default Drawers