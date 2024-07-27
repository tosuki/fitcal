export interface FindableArrayElement <Key> { id: Key }

function getElement <Key, DataType extends FindableArrayElement<Key>> (id: Key, array: DataType[]): DataType | null {
    const index = array.findIndex((element) => {
        return element.id === id
    })

    return index < 0 ? null : array[index]
}

function deleteElement <Key, DataType extends FindableArrayElement<Key>> (callback: (element: DataType) => boolean, array: DataType[]): DataType[] | null {
    const index = array.findIndex(callback)

    if (index < 0) {
        return null
    }

    
    array.splice(index)

    return array
}

export default {
    deleteElement,
    getElement
}