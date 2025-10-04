import { Teppich } from '@/types/teppich'
import teppicheData from '@/data/teppiche.json'

/**
 * Data layer abstraction for carpet products
 * Currently uses JSON file, can be easily migrated to database (Supabase, Postgres, etc.)
 */

export async function getAllTeppiche(): Promise<Teppich[]> {
  // Current implementation: JSON file
  return teppicheData as Teppich[]

  // Future database implementation example:
  // const { data } = await supabase.from('teppiche').select('*').eq('verfuegbar', true)
  // return data as Teppich[]
}

export async function getTeppichById(id: string): Promise<Teppich | null> {
  // Current implementation: JSON file
  const teppiche = teppicheData as Teppich[]
  const teppich = teppiche.find(t => t.id === id)
  return teppich || null

  // Future database implementation example:
  // const { data } = await supabase.from('teppiche').select('*').eq('id', id).single()
  // return data as Teppich
}

export async function getVerfuegbareTeppiche(): Promise<Teppich[]> {
  // Current implementation: JSON file
  const teppiche = teppicheData as Teppich[]
  return teppiche.filter(t => t.verfuegbar)

  // Future database implementation example:
  // const { data } = await supabase.from('teppiche').select('*').eq('verfuegbar', true)
  // return data as Teppich[]
}

export interface FilterOptions {
  herkunft?: string[]
  minPreis?: number
  maxPreis?: number
  material?: string[]
  region?: string[]
}

export async function filterTeppiche(filters: FilterOptions): Promise<Teppich[]> {
  let teppiche = await getVerfuegbareTeppiche()

  if (filters.herkunft && filters.herkunft.length > 0) {
    teppiche = teppiche.filter(t => filters.herkunft!.includes(t.herkunft))
  }

  if (filters.minPreis !== undefined) {
    teppiche = teppiche.filter(t => t.preis >= filters.minPreis!)
  }

  if (filters.maxPreis !== undefined) {
    teppiche = teppiche.filter(t => t.preis <= filters.maxPreis!)
  }

  if (filters.material && filters.material.length > 0) {
    teppiche = teppiche.filter(t =>
      filters.material!.some(m => t.material.toLowerCase().includes(m.toLowerCase()))
    )
  }

  if (filters.region && filters.region.length > 0) {
    teppiche = teppiche.filter(t =>
      t.region && filters.region!.includes(t.region)
    )
  }

  return teppiche
}

export async function searchTeppiche(query: string): Promise<Teppich[]> {
  const teppiche = await getVerfuegbareTeppiche()
  const lowerQuery = query.toLowerCase()

  return teppiche.filter(t =>
    t.name.toLowerCase().includes(lowerQuery) ||
    t.herkunft.toLowerCase().includes(lowerQuery) ||
    (t.region && t.region.toLowerCase().includes(lowerQuery)) ||
    t.beschreibung.toLowerCase().includes(lowerQuery) ||
    t.material.toLowerCase().includes(lowerQuery)
  )
}

export function getUniqueHerkuenfte(teppiche: Teppich[]): string[] {
  const herkuenfte = new Set(teppiche.map(t => t.herkunft))
  return Array.from(herkuenfte).sort()
}

export function getUniqueMaterialien(teppiche: Teppich[]): string[] {
  const materialien = new Set<string>()
  teppiche.forEach(t => {
    if (t.material.toLowerCase().includes('seide')) materialien.add('Seide')
    if (t.material.toLowerCase().includes('wolle')) materialien.add('Wolle')
    if (t.material.toLowerCase().includes('baumwolle')) materialien.add('Baumwolle')
  })
  return Array.from(materialien).sort()
}

export function getUniqueRegionen(teppiche: Teppich[]): string[] {
  const regionen = new Set(teppiche.map(t => t.region).filter(Boolean) as string[])
  return Array.from(regionen).sort()
}

export function getPreisRange(teppiche: Teppich[]): { min: number; max: number } {
  if (teppiche.length === 0) return { min: 0, max: 10000 }

  const preise = teppiche.map(t => t.preis)
  return {
    min: Math.min(...preise),
    max: Math.max(...preise)
  }
}
