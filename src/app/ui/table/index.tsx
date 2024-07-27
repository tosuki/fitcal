import { Food } from "@/app/lib/data/Food"
import TableRow from "./row"

import styles from "./table.module.css"

export type TableProperties = {
    values?: (Food & { weight: number })[]
}

export default function Table(properties: TableProperties) {
    return (
        <table className={ styles.table_container }>
            <thead>
                <tr className={ styles.table_header_row }>
                    <th className={ styles.table_header_col } scope="col">Name</th>
                    <th className={ styles.table_header_col } scope="col">Calories</th>
                    <th className={ styles.table_header_col } scope="col">Protein</th>
                    <th className={ styles.table_header_col } scope="col">Carbohydrates</th>
                    <th className={ styles.table_header_col } scope="col">Fat</th>
                    <th className={ styles.table_header_col } scope="col">Weight</th>
                </tr>
            </thead>
            <tbody>
                {properties.values?.map((food) => {
                    return (
                        <TableRow {...food}/>
                    )
                })}
            </tbody>
        </table>
    )
}
