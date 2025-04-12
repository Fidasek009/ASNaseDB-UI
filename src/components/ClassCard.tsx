import Link from "next/link";

import { Typography } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export interface ClassCardProps {
    video: string;
    title: string;
    link: string;
}

export default function ClassCard({ video, title, link }: ClassCardProps) {
    return (
        <Link href={link} style={{ textDecoration: "none" }}>
            <Card
                sx={{
                    maxWidth: 350,
                    margin: 2,
                    textAlign: "center",
                    padding: 2,
                    borderRadius: 5,
                    border: 2,
                    borderColor: "secondary.main",
                    transition: "border-color 0.3s",
                    "&:hover": {
                        borderColor: "primary.main",
                    },
                }}
            >
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "auto", borderRadius: 16 }}
                />
                <CardContent
                    sx={{
                        paddingBottom: "0 !important", // Override default paddingBottom
                    }}
                >
                    <Typography variant="h2">{title}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
