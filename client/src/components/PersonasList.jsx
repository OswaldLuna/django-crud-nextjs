import { useGetPersonasQuery, useEliminarPersonaMutation } from "@/api/apiSlice"
import Tarjeta from "./Tarjeta";

export default function PersonasList() {

	const { data: personas, isLoading, error } = useGetPersonasQuery()


	if (isLoading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>Error al cargar las personas.</div>;
	}

	return (
		<div className="flex flex-wrap gap-2">
			{personas.map((persona) => (
				<Tarjeta persona={persona} key={persona.id} />
			))}
		</div>
	)
}