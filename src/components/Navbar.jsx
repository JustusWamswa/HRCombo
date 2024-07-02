import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import SearchBar from './SearchBar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import EventIcon from '@mui/icons-material/Event'
import HomeIcon from '@mui/icons-material/Home'
import AddIcCallIcon from '@mui/icons-material/AddIcCall'
import DescriptionIcon from '@mui/icons-material/Description'
import WidgetsIcon from '@mui/icons-material/Widgets'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Stack, Typography } from '@mui/material'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Logo from '../assets/logo4.png'
import { useNavStore } from '../stores/useNavStore'
import Footer from './Footer'
const drawerWidth = 300

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Navbar({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [selected, setSelected] = useState('Dashboard')
    const { navValue, setNavValue } = useNavStore()
    const navigate = useNavigate()

    const handleDrawerClose = () => {
        setIsClosing(true)
        setMobileOpen(false)
    }

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false)
    }

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen)
        }
    }

    const handleChange = (event, newValue) => {
        setNavValue(newValue);
    }

    const handleSelected = (text) => {
        setSelected(text)
        const url = text.trim().replace(' ', '').toLowerCase()
        navigate(`/${url}`)
    }
    const handleLogout = () => {
        navigate('/')
    }

    const icons = [
        <HomeIcon color='inherit' />, <EventIcon color='inherit' />,
        <AddIcCallIcon color='inherit' />, <DescriptionIcon color='inherit' />,
        <WidgetsIcon color='inherit' />
    ]

    const drawer = (
        <div>
            <Toolbar sx={{ height: '10vh', pt: 10, pb: 3 }}>
                <Box display={'flex'} alignItems={'center'}>
                    <Box
                        component="img"
                        sx={{ height: 80, cursor: 'pointer' }}
                        alt="Logo"
                        src={Logo}
                        pb={3}
                        onClick={() => navigate('/')}
                    />
                    <Typography color={'primary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>HR</Typography>
                    <Typography color={'secondary'} fontWeight={'bold'} variant='h2' fontSize={{ xs: 20, md: 20 }}>Combo</Typography>
                </Box>
            </Toolbar>
            <List>
                {['Home', 'About Us', 'Job Listings', 'Candidate Portal', 'Employer Portal'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={() => handleSelected(text)}
                            sx={selected == text ? { backgroundColor: 'primary.main', color: 'white', ":hover": { backgroundColor: 'primary.main' }, mx: 2 } : { mx: 2 }}>
                            <ListItemIcon sx={selected == text && { color: 'white' }}>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem key={'Settings'} disablePadding>
                    <ListItemButton
                        onClick={() => handleSelected('Settings')}
                        sx={selected == 'Settings' ? { backgroundColor: 'primary.main', color: 'white', ":hover": { backgroundColor: 'primary.main' }, mx: 2 } : { mx: 2 }}>
                        <ListItemIcon>
                            <SettingsIcon sx={selected == 'Settings' && { color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary={'Settings'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Logout'} disablePadding>
                    <ListItemButton
                        onClick={handleLogout}
                        sx={{ color: 'secondary.main', mx: 2 }} >
                        <ListItemIcon>
                            <ExitToAppIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Box display={'flex'} justifyContent={'center'} width={'100%'} mt={5}>
            </Box>
        </div>
    )

    return (
        <>
            <Box sx={{ width: '100%' }} display={{ xs: 'none', lg: 'block' }}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} maxWidth={'90%'} mx={'auto'}>
                    <Box
                        component="img"
                        sx={{ height: 80, cursor: 'pointer' }}
                        alt="Logo"
                        src={Logo}
                        onClick={() => navigate('/')}
                    />
                    <Tabs value={navValue} onChange={handleChange} aria-label="large screen navbar" >
                        <Tab label="Home" {...a11yProps(0)} sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/')} />
                        <Tab label="About Us" {...a11yProps(1)} sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/aboutus')} />
                        <Tab label="Job Listings" {...a11yProps(2)} sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/joblistings')} />
                        <Tab label="Candidate Portal" {...a11yProps(3)} sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/candidateportal')} />
                        <Tab label="Employer Portal" {...a11yProps(4)} sx={{ textTransform: 'capitalize' }} onClick={() => navigate('/employerportal')} />
                    </Tabs>
                    <Button variant='contained' sx={{ paddingX: '1rem', textTransform: 'capitalize', borderRadius: 3 }} onClick={() => navigate('/login')}>Login/Register</Button>
                </Box>
                {children}
                <Footer />
            </Box>
            <Box sx={{ width: '100%' }} display={{ lg: 'none', xs: 'block' }}>
                <Box sx={{}}>
                    <CssBaseline />
                    <AppBar
                        position="relative"
                        sx={{
                            width: { lg: `calc(100% - ${drawerWidth}px)` },
                            ml: { lg: `${drawerWidth}px` },
                            backgroundColor: 'transparent',
                            boxShadow: 'none'
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { lg: 'none' } }}
                            >
                                <MenuIcon color='secondary' />
                            </IconButton>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                                <Box
                                    component="img"
                                    sx={{ height: 80, cursor: 'pointer' }}
                                    alt="Logo"
                                    src={Logo}
                                    onClick={() => navigate('/')}
                                />
                                <Button variant='contained' sx={{ paddingX: '1rem', textTransform: 'capitalize', borderRadius: 3 }} onClick={() => navigate('/login')}>Login/Register</Button>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onTransitionEnd={handleDrawerTransitionEnd}
                            onClose={handleDrawerClose}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        {children}
                        <Footer />
                    </Box>
                </Box>

            </Box>
        </>
    )
}


export default Navbar

