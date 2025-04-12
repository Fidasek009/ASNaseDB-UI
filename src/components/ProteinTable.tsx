"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

export interface ProteinData {
    family: string | null;
    alternative: string | null;
    accession_number: string | null;
    name: string | null;
    ec: string | null;
    organism: string | null;
    cellular_location: string | null;
    amino_acids: number | null;
    structure: string | null;
    pdb: string | null;
    k_m: number | null;
    v_max: number | null;
    k_cat: number | null;
}

export interface ProteinTableProps {
    proteinData: ProteinData[];
}

const columns: GridColDef[] = [
    { field: "family", headerName: "Fam", width: 75, description: "Class - Clan - Family" },
    { field: "alternative", headerName: "Alt", width: 75, description: "Alternative historical name / classification" },
    { field: "accession_number", headerName: "AN", width: 150, description: "UniProt accession number" },
    {
        field: "name",
        headerName: "Name",
        width: 150,
        description: "UniProt entry name, only give here for Swiss-Prot entries",
    },
    { field: "ec", headerName: "EC", width: 75, description: "Enzyme Commission number" },
    { field: "organism", headerName: "Organism", width: 200, description: "Organism name" },
    { field: "cellular_location", headerName: "Cell-Loc", width: 150, description: "Cellular location" },
    { field: "amino_acids", headerName: "AAs", width: 50, description: "Number of amino acids" },
    { field: "structure", headerName: "Structure", width: 200, description: "Structure" },
    { field: "pdb", headerName: "PDB", width: 100, description: "PDB ID" },
    {
        field: "k_m",
        headerName: "K<sub>m</sub>",
        renderHeader: () => <span dangerouslySetInnerHTML={{ __html: "K<sub>m</sub>" }} />,
        type: "number",
        width: 75,
        description: "for Asn [mM]",
    },
    {
        field: "v_max",
        headerName: "V<sub>max</sub>",
        renderHeader: () => <span dangerouslySetInnerHTML={{ __html: "V<sub>max</sub>" }} />,
        type: "number",
        width: 75,
        description: "for Asn [μmol/min/mg]",
    },
    {
        field: "k_cat",
        headerName: "k<sub>cat</sub>",
        renderHeader: () => <span dangerouslySetInnerHTML={{ __html: "k<sub>cat</sub>" }} />,
        type: "number",
        width: 75,
        description: "for Asn [s<sup>-1</sup>]",
    },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function ProteinTable({ proteinData }: ProteinTableProps) {
    let totalWidth = 0;
    columns.forEach((column) => {
        if (column.width) {
            totalWidth += column.width;
        }
    });

    const tableWidth = totalWidth + 50; // 50px for checkbox selection

    return (
        <Paper sx={{ width: tableWidth, overflow: "hidden", marginTop: 2 }}>
            <DataGrid
                rows={proteinData}
                columns={columns}
                getRowId={(row) => row.accession_number}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 25]}
                checkboxSelection
                sx={{
                    border: 0,
                    "& .MuiDataGrid-columnHeader": { backgroundColor: "primary.main" },
                    width: tableWidth,
                }}
            />
        </Paper>
    );
}
