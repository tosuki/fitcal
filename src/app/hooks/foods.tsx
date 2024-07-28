"use client"

import {
    ReactNode,
    createContext,
    useContext,
    useCallback
} from "react"

import usePersistentState from "./usePersistentState"

import { Food } from "../lib/data/Food"
import findableArray from "../lib/array"

export type FoodCache = Food & { weight: number }

export type FoodContextProperties = {
    foods: FoodCache[]
    dispatchers: {
        setWeight: (id: number, weight: number) => unknown,
        addFood: (food: FoodCache) => unknown
        setFoods: (food: FoodCache[]) => unknown
    }
}

const context = createContext<FoodContextProperties>({} as FoodContextProperties)

export const FoodProvider = (properties: { children: ReactNode }) => {
    const [cachedFoods, setCachedFoods] = usePersistentState<(FoodCache)[]>("FOODS_CACHE", [])
    
    const setWeight = useCallback((id: number, weight: number) => {
        const foodIndex = cachedFoods.findIndex((cachedFood) => {
            return cachedFood.id === id
        })

        if (foodIndex < 0) {
            return { error: "food-not-found" }
        }

        cachedFoods[foodIndex] = {
            ...cachedFoods[foodIndex],
            weight: weight
        }


        setCachedFoods(cachedFoods)
    }, [cachedFoods])

    const deleteFood = useCallback((id: number) => {
        const result = findableArray.deleteElement((element) => {
            return element.id === id
        }, cachedFoods)
        
        if (result) {
            console.log("Deleting ", id)
            setCachedFoods(result)
        }
    }, [cachedFoods])

    return (
        <context.Provider
            value={{
                foods: cachedFoods,
                dispatchers: {
                    setWeight,
                    setFoods: setCachedFoods,
                    addFood: (food: FoodCache) => {
                        setCachedFoods([...cachedFoods, food])
                    }
                }
            }}
        >
            { properties.children }
        </context.Provider>
    )
}

export const useFood = () => useContext(context)