import { Typography, Grid, Box } from "@mui/material";

import Search from "@/components/Search";
import ProteinTable from "@/components/ProteinTable";
import ClassCard from "@/components/ClassCard";

import proteinData from "@/util/demo_protein_data.json";

export default function Home() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}>
                <Box bgcolor="secondary.main" padding={2} borderRadius={2} marginBottom={2}>
                    <Search />
                </Box>

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

            <Typography variant="h3" color="primary" gutterBottom>
                What Are Asparaginases?
            </Typography>
            <Typography variant="body1" gutterBottom>
                L-Asparaginases are a diverse group of enzymes that catalyse the hydrolysis of L-asparagine. In
                medicine, they play a pivotal role in the treatment of acute lymphoblastic leukaemia and lymphoblastic
                lymphoma, while in the food industry, they are used to reduce neurotoxic acrylamide levels in processed
                products.
            </Typography>

            <Typography variant="h3" color="primary" gutterBottom>
                About the Database
            </Typography>
            <Typography variant="body1" gutterBottom>
                The Asparaginase Sequence Database is a resource that provides organized L-asparaginase sequences and
                structures within their phylogenetic families along with biochemical annotations for characterized
                enzymes. The database is built on a comprehensive phylogenetically driven L-asparaginase classification
                that integrates existing biochemical knowledge with expanding sequence data. This system is not only
                free of historical ambiguities but could also aid scientists with understanding and discovering
                L-asparaginases with improved functional or structural properties.
            </Typography>

            <Typography variant="h3" color="primary" gutterBottom>
                The Classification
            </Typography>
            <Typography variant="body1" gutterBottom>
                The L-asparaginase classification that underpins this database is based on extensive sequence (and
                structural) analysis of all known and predicted L-asparaginases. As these enzymes form a complex and
                intertwined group, sequence similarity analysis was selected as the best primary driver of the
                classification, rather than other factors like taxonomy, cellular location or enzyme kinetics, enabling
                a more objective and natural classification less biased by the order of scientific discovery. This
                bioinformatics-centred approach also makes the classification more robust to future discoveries.
            </Typography>

            <Typography variant="h3" color="primary" gutterBottom>
                Asparaginase Classes
            </Typography>
            <Typography variant="body1" gutterBottom>
                There are three fundamental classes of L-asparaginases, each with unique conserved motifs and
                structures. No homology could be inferred between these classes of L-asparaginases, as they show very
                low mutual sequence identity. Sequences are categorized into Class 1 (historically bacterial-type),
                Class 2 (plant type) and Class 3 (R. etli-type) L-asparaginases. Sequences in these classes were
                clustered and aligned independently. This allowed further division into new phylogenetic families and
                clans inferred from a comprehensive phylogenetic analysis.
            </Typography>

            <Typography variant="h3" color="primary" gutterBottom>
                Conserved Motifs
            </Typography>
            <Typography variant="body1" gutterBottom>
                For each class and family conserved sequence motifs are presented. Some motives are universal in the
                class, others are specific to related families. They were determined from an alignment of a selection of
                many representative sequences that generally have mutual sequence similarities of less than 80%. The
                random selection was refined by removing the most obvious outliers and adding a selected reference
                sequence. The resulting motifs are given with consensus percentages for the representative sequences and
                are mapped on to a selected sequence. These percentages indicate a trend in the family and do not
                reflect every single sequence in the family, as each family has a large number of sequences. Generally
                only motifs present in several families are described.
            </Typography>

            <Typography variant="h3" color="primary" gutterBottom>
                Disclaimer
            </Typography>
            <Typography variant="body1" gutterBottom>
                This database is a work in progress and not all functionalities are fully available yet. Information
                provided on families and classes of L-asparaginases is general and might not apply to every sequence or
                protein. Although many, not all experimentally studied L-asparaginases could be presented. Please check
                information that is provided on proteins in the original publication/source.
            </Typography>
        </>
    );
}
