import {
    Dispatch,
    SetStateAction,
    useState,
    useEffect
} from "react"

export type PersistentState <T> = [
    T,
    Dispatch<SetStateAction<T>>
]

/**
 * "use client" required for this hook to wwork
 */
export default function usePersistentState <T> (key: string, defaultValue: T): PersistentState<T> {
    const [temporaryState, setTemporaryState] = useState<T>(() => {
        if (typeof window === "undefined") {
            return defaultValue
        }

        const persistentValue = window.localStorage.getItem(key)

        if (persistentValue) {
            return JSON.parse(persistentValue)
        }
        
        return defaultValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(temporaryState))
    }, [temporaryState])

    return [temporaryState, setTemporaryState]
}
