
import { useState, MouseEvent } from "react";
import { Typography, useTheme, Menu, MenuItem, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import { Menu as MenuIcon } from "@mui/icons-material";

export default function Header() {
    const theme = useTheme();
    const [menuAnchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <header style={{ backgroundColor: theme.palette.primary.main }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                    <Image src="/images/logo1.png" alt="Logo" width={80} height={80} />
                </Link>
                <Typography variant="h2">ASNase Database</Typography>
                <IconButton onClick={handleMenuClick} style={{ color: "white" }}>
                    <MenuIcon style={{ width: 50, height: 50, padding: 5 }} />
                </IconButton>
                <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
                    <MenuItem href="/">ASNase db</MenuItem>
                    <MenuItem href="/class/1">Class 1</MenuItem>
                    <MenuItem href="/class/2">Class 2</MenuItem>
                    <MenuItem href="/class/3">Class 3</MenuItem>
                    <MenuItem href="/#proteins">Studied Proteins</MenuItem>
                    <MenuItem href="/#proteins">Swiss-Prot Sequences</MenuItem>
                    <MenuItem href="/#proteins">What Are Asparaginases?</MenuItem>
                    <MenuItem href="/#proteins">About the Database</MenuItem>
                </Menu>
            </div>
        </header>
    );
}
