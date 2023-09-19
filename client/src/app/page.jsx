'use client'

import PersonasList from "@/components/PersonasList"
import { ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiSlice } from '@/api/apiSlice'
import PersonaForm from "@/components/PersonaForm"

export default function Home() {
  return (
    <ApiProvider api={apiSlice}>
      <main className="grid py-5 px-2 gap-3">
        <PersonaForm/>
        <PersonasList/>
      </main>
    </ApiProvider>
    
  )
}
