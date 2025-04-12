import ProteinData from "@/types/ProteinData";

import proteinData from "@/util/demo_protein_data.json";

// DEMO
export const searchProteinData = async (query: string): Promise<ProteinData[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate 500ms delay

    const queryLower = query.toLowerCase();

    return proteinData.filter((protein) => {
        return (
            protein.accession_number?.toLowerCase().includes(queryLower) ||
            protein.name?.toLowerCase().includes(queryLower) ||
            protein.ec?.toLowerCase().includes(queryLower) ||
            protein.organism?.toLowerCase().includes(queryLower) ||
            protein.cellular_location?.toLowerCase().includes(queryLower)
        );
    });
};
