"use client"
import { FoodCache } from "../../../hooks/foods"

import styles from "./row.module.css"

export type TableRowProperties = FoodCache

export default function TableRow(properties: TableRowProperties) {
    return (
        <tr className={ styles.table_row }>
            <th className={ styles.table_row_header } scope="row">{ properties.name }</th>
            <td className={ styles.table_row_cell }>{ properties.calories * properties.weight }</td>
            <td className={ styles.table_row_cell }>{ properties.protein * properties.weight }</td>
            <td className={ styles.table_row_cell }>{ properties.carbohydrates * properties.weight }</td>
            <td className={ styles.table_row_cell }>{ properties.fat * properties.weight }</td>
            <td className={ styles.table_row_cell }>{ properties.weight }</td>
        </tr>
    )
}