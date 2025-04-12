import proteinData from '@/util/demo_protein_data.json';
import ProteinTable from '@/components/ProteinTable';


export default function Home() {
    return (
        <ProteinTable proteinData={proteinData} />
    )
}
