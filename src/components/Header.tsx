import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography, useTheme, Menu, MenuItem, IconButton } from "@mui/material";
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
                    <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                        <MenuItem onClick={handleMenuClose}>ASNase db</MenuItem>
                    </Link>
                    <Link href="/class/1" style={{ color: "white", textDecoration: "none" }}>
                        <MenuItem onClick={handleMenuClose}>Class 1</MenuItem>
                    </Link>
                    <Link href="/class/2" style={{ color: "white", textDecoration: "none" }}>
                        <MenuItem onClick={handleMenuClose}>Class 2</MenuItem>
                    </Link>
                    <Link href="/class/3" style={{ color: "white", textDecoration: "none" }}>
                        <MenuItem onClick={handleMenuClose}>Class 3</MenuItem>
                    </Link>
                </Menu>
            </div>
        </header>
    );
}
