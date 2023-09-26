import { useEffect, useState } from "react";
import {
  db,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
} from "../firebaseConfig";
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import useDapur from "./useDapur";
import useKasir from "./useKasir";
import { onSnapshot } from "firebase/firestore";

const useRestoranScreens = () => {
  const [foods, setFoods] = useState<any[]>([]);
  const [makanan, setMakanan] = useState<string>("");
  const [refresh, setRefresh] = useState(false);
  const {getListMeja1, getListMeja2, getListMeja3} = useDapur()
  const {getListOrderKasir, value} = useKasir()

  const handleInputChange = (event:NativeSyntheticEvent<TextInputChangeEventData>) => {
    const text = event.nativeEvent.text;
    setMakanan(text);
  };

  // Menambah Foods
  const addFoods = async () => {
    try {
      if (makanan == "") {
        Alert.alert("Tidak Boleh Kosong!");  
      } 
      else {
      const res = await addDoc(collection(db, "foodList"), {
        food: makanan,
      });
      // Alert.alert("Berhasil disimpan");
      setMakanan("");
    }
    } catch (error: any) {
      Alert.alert(error.message);
    }
    getListFoods();
  };

  const getListFoods = async () => {
    try {
      const query = collection(db, "foodList");
      const unsubscribe = onSnapshot(query, (snapshot) => {
        const filteredFoods: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // .filter((item) => item.age <= 22); // Filter client-side
        setFoods(filteredFoods);
      });
  
      return unsubscribe;
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const deleteFood = async (id:string) => {
    try {
        await deleteDoc(doc(db, "foodList", id))
        Alert.alert("Berhasil dihapus");
        getListFoods()
    } catch (error:any) {
        Alert.alert(error.message)
    }
  }

  const deleteAllCollection = async () => {
    const collectionNames = ["foodList", "meja1", "meja2", "meja3"];
  
    try {
      for (const collectionName of collectionNames) {
        const collectionRef = collection(db, collectionName);
        const snapshot = await getDocs(collectionRef);
  
        snapshot.forEach((doc) => {
          deleteDoc(doc.ref);
        });
      }
      // Alert.alert("Berhasil Menghapus semua data, dan jangan lupa reload apps");
    } catch (error:any) {
      // Alert.alert(error.message)
    }
  }
  

  useEffect(() => {
    getListFoods();
  }, []);

  return { foods, makanan, addFoods, db, doc, deleteDoc, getListFoods, handleInputChange, deleteFood, deleteAllCollection };
};

export default useRestoranScreens;
