import { useState } from "react";
import { Alert } from "react-native";
import {
  db,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
} from "../firebaseConfig";
import { onSnapshot } from "firebase/firestore";

const useOrder = () => {
    const [selected, setSelected] = useState<any>(null)
    const [isFocus, setIsFocus] = useState<boolean>(false)
    const [qty, setQty] = useState<string>()
    const[value, setValue] = useState<string>()
    const [order, setOrder] = useState<any[]>([])

  

    const addOrder = async (selected:any, value:string, qty:string) => {
      try {
        if (selected && value !== "" && qty !== "") {
          const res = await addDoc(collection(db, selected), {
            menu: value ,
            kuantity: qty,
          });
          Alert.alert("Berhasil disimpan");
          setSelected(null)
          setValue("");   
          setQty("")
        }
        else if (selected == null) {
          Alert.alert("Wajib memilih meja pesanan");
        }
        else if (value == "") {
          Alert.alert("Mohon memilih menu");
        }
        else if (qty == "") {
          Alert.alert("Mau berapa pesanan nya?");
        }
       else {
        Alert.alert("Path tidak valid");
       }
      } catch (error: any) {
        Alert.alert(error.message);
      }
      getListOrder();
    };
  
    const getListOrder = async () => {
      try {
        const query = collection(db, selected);
        const unsubscribe = onSnapshot(query, (snapshot) => {
          const filteredFoods: any = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setOrder(filteredFoods);
        });
    
        return unsubscribe;
      } catch (error: any) {
        Alert.alert(error.message);
      }
    };

    const handleOptionSelect = (option:any) => {
      setSelected(option);
    };  
    return {selected, handleOptionSelect, isFocus, setIsFocus, setSelected, value, setValue, qty, setQty, addOrder}
}
export default useOrder;