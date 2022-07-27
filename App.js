import { Accordion } from "@learnbit-react/web-mobile-design-system.base-ui.react-native.accordion";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Accordion
        elementList={[
          { id: "01", title: "Asia" },
          { id: "02", title: "Africa" },
          { id: "03", title: "North America" },
          { id: "04", title: "South America" },
          { id: "05", title: "Antarctica" },
          { id: "06", title: "Australia / Oceania" },
          { id: "07", title: "Europe" },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
});


