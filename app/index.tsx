import { View, Text } from "react-native";
import React from "react";
import RootNavigator from "../navigations";
import Layout from "../components/Layout.tsx";

const index = () => {
  return (
    <Layout>
      <RootNavigator />
    </Layout>
  );
};

export default index;
