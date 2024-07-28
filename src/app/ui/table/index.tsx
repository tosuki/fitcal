import { Food } from "@/app/lib/data/Food"
import TableRow from "./row"

import styles from "./table.module.css"
import TotalTableRow from "./total"
import { FoodCache } from "@/app/hooks/foods"

export type TableProperties = {
    values: FoodCache[]
}

function getTotalNutrients(values: Omit<FoodCache, "name">[], property: keyof Omit<FoodCache, "name">, isWeight?: boolean): number {
    return values.reduce((accumulator, value) => {
        return Math.round(accumulator + (isWeight ? value.weight : (value[property] * value.weight)))
    }, 0)
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
                    <th className={ styles.table_header_col } scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {properties.values?.map((food) => {
                    return (
                        <TableRow {...food}/>
                    )
                })}
                { properties.values ? (properties.values.length > 0 ? 
                    <TotalTableRow 
                        calories={ getTotalNutrients(properties.values, "calories") }
                        carbohydrates={ getTotalNutrients(properties.values, "carbohydrates") }
                        fat={ getTotalNutrients(properties.values, "fat") }
                        protein={ getTotalNutrients(properties.values, "protein") }
                        weight={ getTotalNutrients(properties.values, "weight", true) }
                    /> 
                : null) : null }
            </tbody>
        </table>
    )
}
