import { useRouter } from "next/router"

export default function DetalhesVagaInternacionais(){
    const { query } = useRouter();

    const userId = query.id;

    return(
        <>
            <h1>Detalhes vagas Locais</h1>
            <p>ID da vaga{userId}</p>
        </>
    )
}