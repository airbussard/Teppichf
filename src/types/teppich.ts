export interface Teppich {
  id: string
  name: string
  herkunft: string
  region?: string
  groesse: string
  alter: string
  zustand: string
  material: string
  knuepfung: string
  preis: number
  bilder: string[]
  beschreibung: string
  besonderheiten?: string
  verfuegbar: boolean
}
