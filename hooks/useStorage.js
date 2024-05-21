import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        } catch(error){
            console.log("erro get ", error)
            return []
        }
    }

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch(error){
            console.log("erro ao salver ", error)
        }
    }
    
    const clearItens = async () => {
        try {
          await AsyncStorage.clear();

        } catch (error) {
        }
      };

    return {
        getItem,
        saveItem,
        clearItens,
    }
}

export default useStorage;