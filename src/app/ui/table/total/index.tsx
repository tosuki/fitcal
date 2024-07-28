"use client"
import styles from "./totalRow.module.css"

export type TotalTableRowProperties = {
    protein: number,
    carbohydrates: number,
    fat: number,
    calories: number,
    weight: number
}

export default function TotalTableRow(properties: TotalTableRowProperties) {
    return (
        <tr className={ styles.table_row }>
            <th className={ styles.table_row_header } scope="row">Total</th>
            <td className={ styles.table_row_cell }>{ properties.calories }</td>
            <td className={ styles.table_row_cell }>{ properties.protein }</td>
            <td className={ styles.table_row_cell }>{ properties.carbohydrates }</td>
            <td className={ styles.table_row_cell }>{ properties.fat }</td>
            <td className={ styles.table_row_cell }>{ properties.weight }</td>
        </tr>
    )
}