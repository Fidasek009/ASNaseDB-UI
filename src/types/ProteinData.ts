
export default interface ProteinData {
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
