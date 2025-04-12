import ProteinData from "@/types/ProteinData";

import proteinData from "@/util/demo_protein_data.json";


// DEMO
export const searchProteinData = async (query: string): Promise<ProteinData[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate 500ms delay

    return proteinData.filter((protein) => {
        return (
            protein.accession_number?.toLowerCase().includes(query.toLowerCase()) ||
            protein.name?.toLowerCase().includes(query.toLowerCase()) ||
            protein.ec?.toLowerCase().includes(query.toLowerCase()) ||
            protein.organism?.toLowerCase().includes(query.toLowerCase()) ||
            protein.cellular_location?.toLowerCase().includes(query.toLowerCase())
        );
    });
};
