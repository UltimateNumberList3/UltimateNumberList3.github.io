import { ListNumber, Symbols } from "./types"

function returnSymbols(symbolNumber: ListNumber): string {
    let symbols = ""
    for (const symbolI in symbolNumber.symbols) {
        switch (symbolNumber.symbols[symbolI]) {
            case Symbols.Milestone: symbols += `<span class="milestoneSymbol">★</span>`; break
            case Symbols.BigMilestone: symbols += `<span class="milestone2Symbol">✪</span>`; break
            case Symbols.Featured: symbols += `<span class="featuredSymbol">☆</span>`; break
            case Symbols.NotKnown: symbols += `<span class="notKnownSymbol">✥</span>`; break
            default: symbols += `<span class="errorSymbol">X</span>`; break
        }
    }
    return symbols
}

export {returnSymbols}