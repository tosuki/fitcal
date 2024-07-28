"use client"
import { useState } from "react"
import { useFood } from "../../../hooks/foods"

import { foods as tacoBaseNumbers } from "../../../lib/data/placeholder"
import arrayUtils from "../../../lib/array"

import Modal, { ModalProperties } from ".."

import styles from "./addFood.module.css"

export type AddFoodModalProperties = {
    modal: Omit<ModalProperties, "children"> 
}

export default function AddFoodModal(properties: AddFoodModalProperties) {
    const foodsStorage = useFood()
    
    const [foodAmount, setFoodAmount] = useState<number>(100)
    const [foodID, setFoodID] = useState<number>(-1)//-1 == empty

    const handleOnFormSubmit = () => {
        if (foodID < 0) {
            return properties.modal.setOpen(false)
        }

        const foodBaseNumbers = arrayUtils.getElement(foodID, tacoBaseNumbers)

        if (!foodBaseNumbers) {
            window.alert("Failed to recognize the choosed food")
            return properties.modal.setOpen(false)
        }

        const storedFood = arrayUtils.getElement(foodID, foodsStorage.foods)

        if (storedFood) {
            foodsStorage.dispatchers.setWeight(storedFood.id, (storedFood.weight + foodAmount))
        } else {
            foodsStorage.dispatchers.addFood({
                ...foodBaseNumbers,
                weight: foodAmount
            })
        }
        
        setFoodID(-1)
        properties.modal.setOpen(false)
    }

    return (
        <Modal {...properties.modal}>
            <div className={ styles.add_food_modal_container }>
                <div className={ styles.add_food_modal_header }>
                    <h1>Add new food</h1>
                </div>
                <div className={ styles.add_food_modal_inputs }>
                    <select 
                        className={ styles.add_food_modal_select_input }
                        onChange={(e) => setFoodID(+e.target.value)}
                    >
                        <option value="-1">Empty</option>
                        {tacoBaseNumbers.map(({ name, id }) => {
                            return (
                                <option key={ id } value={ id }>
                                    { name }
                                </option>
                            )
                        })}
                    </select>
                    <input 
                        type="number"
                        className={ styles.add_food_modal_amount_input }
                        placeholder={`${ foodAmount }g`}
                        onChange={(e) => setFoodAmount(+e.target.value)}
                    />
                </div>
                <button
                    className={ styles.add_food_submit_button }
                    onClick={ handleOnFormSubmit }
                >
                    Submit
                </button>
            </div>
        </Modal>
    )
}