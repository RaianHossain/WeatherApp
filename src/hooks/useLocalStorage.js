import { useEffect, useState } from "react";

const useLocalStorage = (storeKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storeKey)) || defaultValue
    );
    
    useEffect(() => {
        localStorage.setItem(storeKey, JSON.stringify(value));
    }, [value, storeKey]);

    return [value, setValue];
}

export default useLocalStorage;