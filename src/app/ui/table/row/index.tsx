"use client"
import { foods } from "@/app/lib/data/placeholder"
import { FoodCache, useFood } from "../../../hooks/foods"

import styles from "./row.module.css"

export type TableRowProperties = FoodCache

export default function TableRow(properties: TableRowProperties) {
    const foodStorage = useFood()
    
    const handleOnDelete = () => {
        console.log("Old foods", foodStorage.foods)

        foodStorage.dispatchers.setFoods(foodStorage.foods.filter((food) => {
            return food.id !== properties.id
        }))
    }

    return (
        <tr className={ styles.table_row }>
            <th className={ styles.table_row_header } scope="row">{ properties.name }</th>
            <td className={ styles.table_row_cell }>{ Math.round(properties.calories * properties.weight) }</td>
            <td className={ styles.table_row_cell }>{ Math.round(properties.protein * properties.weight) }</td>
            <td className={ styles.table_row_cell }>{ Math.round(properties.carbohydrates * properties.weight) }</td>
            <td className={ styles.table_row_cell }>{ Math.round(properties.fat * properties.weight) }</td>
            <td className={ styles.table_row_cell }>{ properties.weight }</td>
            <td className={ styles.table_row_cell }>
                <button 
                    className={ styles.delete_button }
                    onClick={ handleOnDelete }
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}