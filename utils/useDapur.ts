import { useEffect, useState } from "react";
import { getDocs, collection, db } from "../firebaseConfig";
import { Alert } from "react-native";
import { onSnapshot } from "firebase/firestore";

const useDapur = () => {
  const [meja1, setMeja1] = useState<any[]>([]);
  const [meja2, setMeja2] = useState<any[]>([]);
  const [meja3, setMeja3] = useState<any[]>([]);

  const getListMeja1 = async () => {
    try {
      const query = collection(db, "meja1");
      const unsubscribe = onSnapshot(query, (snapshot) => {
        const filteredFoods: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // .filter((item) => item.age <= 22); // Filter client-side
        setMeja1(filteredFoods);
      });

      return unsubscribe;
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const getListMeja2 = async () => {
    try {
      const query = collection(db, "meja2");
      const unsubscribe = onSnapshot(query, (snapshot) => {
        const filteredFoods: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // .filter((item) => item.age <= 22); // Filter client-side
        setMeja2(filteredFoods);
      });

      return unsubscribe;
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const getListMeja3 = async () => {
    try {
      const query = collection(db, "meja3");
      const unsubscribe = onSnapshot(query, (snapshot) => {
        const filteredFoods: any = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // .filter((item) => item.age <= 22); // Filter client-side
        setMeja3(filteredFoods);
      });

      return unsubscribe;
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    getListMeja1();
    getListMeja2();
    getListMeja3();
  }, []);

  return { meja1, meja2, meja3, getListMeja1, getListMeja2, getListMeja3 };
};

export default useDapur;
