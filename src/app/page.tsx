import ProteinTable from "@/components/ProteinTable";
import Search from "@/components/Search";

import proteinData from "@/util/demo_protein_data.json";
import { Typography } from "@mui/material";

export default function Home() {
    return (
        <div style={{ padding: "20px", alignContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Search />

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
