import { IFilters } from '@/interfaces'

import { useState } from 'react'

export const useFilters = (initialFilters: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initialFilters)

  const changeFilter = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return { ...prev, [key]: value }
    })
  }

  return { filters, changeFilter }
}
