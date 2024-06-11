export const generateListingId = (total: number): string => {
    return String(total).padStart(5,"0")
}