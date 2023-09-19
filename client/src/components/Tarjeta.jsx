import { useActualizarPersonaMutation, useEliminarPersonaMutation } from "@/api/apiSlice";
import { useState } from "react"

export default function Tarjeta({persona}) {


	const [actualizar, setActualizar] = useState(false)
	const [nombre, setNombre] = useState(persona.nombre);
  const [apellido, setApellido] = useState(persona.apellido);
  const [celular, setCelular] = useState(persona.celular);

	const [eliminarPersona] = useEliminarPersonaMutation()

	const [actualizarPersona] = useActualizarPersonaMutation()

	const guardarDatos = () => {

		const id = persona.id

		actualizarPersona({
			id,
			nombre,
			apellido,
			celular,})
		
		setActualizar(!actualizar)

	}




  return(
		<div key={persona.id} className="bg-black text-white p-2 rounded">
			{actualizar ?(
				<div className="flex gap-1">
					<input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
					className="text-black w-24"/>
					<input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}
					className="text-black w-24"/>
					<input type="text" value={celular} onChange={(e) => setCelular(e.target.value)}
					className="text-black w-24"/>
				</div>):
				<>
					<h1>Nombre: {persona.nombre} {persona.apellido}</h1>
					<p>Celular: {persona.celular}</p>
				</>
			}
		
		<div className="flex gap-1">
			<button onClick={() => eliminarPersona(persona.id)} 
			className="bg-red-700 text-white rounded p-1 hover:bg-white hover:text-red-600">Eliminar</button>
			{actualizar?(
				<button onClick={guardarDatos}
				className="bg-green-600 text-white rounded p-1 hover:bg-yellow-300">Guardar</button>
			):
			<button  onClick={()=> setActualizar(!actualizar)} className="bg-yellow-300 text-black rounded p-1 hover:bg-green-600">Actualizar Datos</button>
			}
			
	 </div>
	</div>
  )
}