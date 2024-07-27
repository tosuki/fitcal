"use client"
import { useState } from "react"
import { useFood } from "./hooks/foods"

import styles from "./page.module.css"

import Table from "./ui/table"
import AddFoodModal from "./ui/modal/addFoodModal"

export default function AppPage() {
  const foodsManager = useFood()
  
  const [isAddFoodModalOpen, setAddFoodModalOpen] = useState<boolean>(false)

  return (
    <div className={ styles.container }>
      <div className={ styles.info_space }>
        <h1>Alimentos</h1>
        <button
          className={ styles.button_container }
          onClick={() => setAddFoodModalOpen(!isAddFoodModalOpen)}
        >
          Add
        </button>
        <AddFoodModal 
          modal={{
            setOpen: setAddFoodModalOpen,
            isOpen: isAddFoodModalOpen
          }}
        />
      </div>
      <div 
        className={ styles.table_space }
        suppressHydrationWarning
      >
        <Table
          values={foodsManager.foods}
        />
      </div>
    </div>
  )
}
