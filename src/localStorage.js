import globalArray from "./GlobalArray";
export function getLocalStorage() {
    let globalArray_serialized = JSON.stringify(globalArray.get())
    localStorage.setItem('localStorageArray', globalArray_serialized)
    
    return JSON.parse(localStorage.getItem('localStorageArray'))
}

export function loadLocalStorage() {
    let globalArray_serialized = JSON.stringify(globalArray.get())
    
    
    return localStorage.setItem('localStorageArray', globalArray_serialized) 
}