import { Typography, Grid } from "@mui/material";

import Search from "@/components/Search";
import ProteinTable from "@/components/ProteinTable";
import ClassCard from "@/components/ClassCard";

import proteinData from "@/util/demo_protein_data.json";


export default function Home() {
    return (
        <div style={{ padding: "20px", alignContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Search />

            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid size={4}>
                    <ClassCard video="/images/3ECA.mp4" title="Class 1" link="/class/1" />
                </Grid>
                <Grid size={4}>
                    <ClassCard video="/images/1T3M.mp4" title="Class 2" link="/class/2" />
                </Grid>
                <Grid size={4}>
                    <ClassCard video="/images/7OS6.mp4" title="Class 3" link="/class/3" />
                </Grid>
            </Grid>


            <Typography variant="h3" color="primary" gutterBottom>
                Experimentally Studied Proteins
            </Typography>
            <ProteinTable proteinData={proteinData} />

            <Typography variant="h3" color="primary" gutterBottom>
                Swiss-Prot Sequences
            </Typography>
            <ProteinTable proteinData={proteinData} />

        </div>
    );
}
