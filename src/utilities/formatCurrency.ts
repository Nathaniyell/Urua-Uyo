const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    // currency: "NGN", for Nigerian symbol
    style: "currency"
})

export function formatCurrency(number:number){
    return CURRENCY_FORMATTER.format(number)
}