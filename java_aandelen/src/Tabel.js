import React from "react"

const tabel = [{"fundId":1,"fundName":"ASN Duurzaam Aandelenfonds","prices":{"2025-02-11":177.59,"2025-02-10":176.05,"2025-02-07":177.01,"2025-02-06":175.6,"2025-02-05":174.08,"2025-02-04":174.79,"2025-02-03":176.14,"2025-01-31":176.7,"2025-01-30":174.76,"2025-01-29":174.64,"2025-01-28":173.03}}]

const TabelGenerator = () => {
    const key = "prices"
    //de array is om de plaatsing van de datums te zien van priceKeys
    //["2025-02-11","2025-02-10","2025-02-07","2025-02-06","2025-02-05","2025-02-04","2025-02-03","2025-01-31","2025-01-30","2025-01-29","2025-01-28"]
    const priceKeys = Object.keys(tabel[0][key])
    const priceArrey = []
    for (let i = priceKeys.length - 1; i >= 0; i--){
        const key1 = priceKeys[i]
        const workTable = tabel[0][key][key1]
        //[173.03, 174.64, 174.76, 176.7, 176.14, 174.79, 174.08, 175.6, 177.01, 176.05, 177.59]
        // dit is de priceArrey na de for loop
        priceArrey.push(workTable)}
    console.log(priceArrey)
    return (
        <div>
            <p>{priceArrey}</p>
        </div>
    )
}

export default TabelGenerator