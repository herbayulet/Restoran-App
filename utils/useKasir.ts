import { useEffect, useState } from "react"
import {getDocs, collection, db, deleteDoc,doc} from "../firebaseConfig"
import { Alert } from "react-native"
import Kasir from "../screens/Kasir"

const useKasir = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string>()
    const [listKasir, setListKasir] = useState<any[]>([])
 
    const getListOrderKasir = async (kasir:string) => {
        try {
          const query = await getDocs(collection(db, kasir));
          const filteredFoods: any = query.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setListKasir(filteredFoods);
        } catch (error: any) {
          Alert.alert(error.message);
        }
      };

      const deleteOrder = async (collectionName:string) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
        
            querySnapshot.forEach(async (doc) => {
              await deleteDoc(doc.ref);
            });
        
            Alert.alert("Berhasil dihapus");
            getListOrderKasir(value || "")
          } catch (error:any) {
            Alert.alert(error.message)
          }
      }

    const handleChangeValue = (str: string) => {
        setValue(str)
    }

    useEffect(() => {
        if (value) {
            getListOrderKasir(value)
        }
    }, [])

    return {value, setValue, isFocus, setIsFocus, handleChangeValue, listKasir, getListOrderKasir, deleteOrder}
}

export default useKasir