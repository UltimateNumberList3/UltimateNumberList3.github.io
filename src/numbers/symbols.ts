import { ListNumber } from "./types"

function returnSymbols(symbolNumber: ListNumber): string {
    let symbols: string = ""
    for (const symbolI in symbolNumber.symbols) {
        switch (symbolNumber.symbols[symbolI]) {
            case "milestone": symbols += `<span class="milestone">★</span>`; break
            case "milestone2": symbols += `<span class="milestone2">✪</span>`; break
            case "featured": symbols += `<span class="featured">☆</span>`; break
            case "notknown": symbols += `<span class="notknown">✥</span>`; break
            default: symbols += `?`; break
        }
    }
    return symbols
}

export {returnSymbols}