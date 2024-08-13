import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "@repo/ui";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text> 
      <View className="buttonContainer">
        <Button
          onClick={() => {
            console.log("Pressed!");
            alert("Pressed!");
          }}
          text="Boop4"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
