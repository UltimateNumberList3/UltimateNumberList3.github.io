import { ListNumber } from "./types"

function returnSymbols(symbolNumber: ListNumber): string {
    let symbols = ""
    for (const symbolI in symbolNumber.symbols) {
        switch (symbolNumber.symbols[symbolI]) {
            case "milestone": symbols += `<span class="milestoneSymbol">★</span>`; break
            case "milestone2": symbols += `<span class="milestone2Symbol">✪</span>`; break
            case "featured": symbols += `<span class="featuredSymbol">☆</span>`; break
            case "notknown": symbols += `<span class="notKnownSymbol">✥</span>`; break
            default: symbols += `<span class="errorSymbol">X</span>`; break
        }
    }
    return symbols
}

export {returnSymbols}