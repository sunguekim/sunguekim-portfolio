import { useState } from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery, useTheme } from '@mui/material'
import { ILinks, Links } from './Header';
import MaterialSwitch from './Switch';
import Link from 'next/link';

export const HeaderDrawer = () => {
    const [isOpen, setOpen] = useState(false);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const handleDrawerOpen = () => {
        if (isOpen) setOpen(false);
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    console.log(isMobile);

    return (
        <>
            <IconButton
                onClick={handleDrawerOpen}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='right'
                open={isOpen}
                onClose={() => { setOpen(false) }}
            >
                <Box p={2} width='250px' textAlign='center' zIndex={-9999} justifyContent='center' role='presentation'>
                    <List>
                        {Links.map(({ id, name, path }: ILinks) => {
                            return (
                                <ListItem button key={id}>
                                    <Link key={id} href={path}>
                                        <ListItemText primary={name} />
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </List>

                    <MaterialSwitch />
                </Box>
            </Drawer>

        </>
    )
}
