import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8000/api/v1/personas/'
	}),
	tagTypes: ['personas'],
	endpoints: (builder) => ({
		getPersonas: builder.query({
			query: () => '',
			providesTags: ['personas']

		}),
		agregarPersona: builder.mutation({
			query: (newPerson) => ({
				url: '',
				method: 'POST',
				body: newPerson,
			}),
			invalidatesTags: ['personas']
		}),
		actualizarPersona: builder.mutation({
			query: (datosActualizados) => ({
				url: `${datosActualizados.id}/`,
				method: 'PUT',
				body: datosActualizados,
			}),
			invalidatesTags: ['personas']
		}),
		eliminarPersona: builder.mutation({
			query: (id) => ({
				url: `${id}/`,
				method: 'DELETE',
			}),
			invalidatesTags: ['personas']
		}),
	})
})

export const { useGetPersonasQuery, useAgregarPersonaMutation,
	useEliminarPersonaMutation, useActualizarPersonaMutation } = apiSlice