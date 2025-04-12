import { useTheme, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
    const theme = useTheme();

    return (
        <footer style={{ backgroundColor: theme.palette.primary.main }}>
            <Typography variant="caption">
                The Asparaginase Database | Release 2025-01 | Contact:{" "}
                <Link href="mailto:stetinam@vscht.cz" style={{ color: "white" }}>
                    stetinam@vscht.cz
                </Link>
            </Typography>
        </footer>
    );
}
