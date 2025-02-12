import React from "react"

const tabel = [{"fundId":1,"fundName":"ASN Duurzaam Aandelenfonds","prices":{"2025-02-11":177.59,"2025-02-10":176.05,"2025-02-07":177.01,"2025-02-06":175.6,"2025-02-05":174.08,"2025-02-04":174.79,"2025-02-03":176.14,"2025-01-31":176.7,"2025-01-30":174.76,"2025-01-29":174.64,"2025-01-28":173.03}}]

const TabelGenerator = () => {
    const workTable = tabel[1].prices
    return (
        <div>
            <p>{workTable}</p>
        </div>
    )
}

export default TabelGenerator