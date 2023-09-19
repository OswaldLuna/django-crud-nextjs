import { useAgregarPersonaMutation } from "@/api/apiSlice"

export default function PersonaForm(){

	const [agregarPersona] = useAgregarPersonaMutation()

	const handleSubmit= (e) =>{
		e.preventDefault()

		const nombre = e.target.elements.nombre.value.trim()
		const apellido = e.target.elements.apellido.value.trim()
		const celular = e.target.elements.celular.value.trim()

		agregarPersona({
			nombre,
			apellido,
			celular,
		})

		e.target.elements.nombre.value = ''
		e.target.elements.apellido.value = ''
		e.target.elements.celular.value = ''

	}

  return(
		<form onSubmit={handleSubmit} className="flex gap-2 items-center">
			<label className="flex gap-x-1">
				Nombre:
				<input type="text" name="nombre" className="pl-1"/>
			</label>
				
			<label className="flex gap-x-1">
				Apellido:
				<input type="text" name="apellido" className="pl-1"/>
			</label>
				
			<label className="flex gap-x-1">
				Celular:
				<input type="text" name="celular" className="pl-1"/>
			</label>
			
			<button className="bg-blue-600 rounded text-white py-1 px-2 hover:bg-green-600">Agregar Persona</button>
		</form>
  )
}