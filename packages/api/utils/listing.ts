import { TListingFilters } from "../types/listing"

export const generateListingId = (total: number): string => {
    return String(total).padStart(5,"0")
}

export const listingFiltersToArray = (filters: TListingFilters): TListingFilters[] => {
    let arr: TListingFilters[] = []
    for (const [key, value] of Object.entries(filters)) {
        if (value) {
            arr = [{ [key]: value }, ...arr]
        }
    }

    return arr
}