export const formatStringToTwoDecimal = (num: string): number => {
    return Number(Number(num).toFixed(2))
}