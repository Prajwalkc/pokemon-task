import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    centerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    loadingText: {
      marginTop: 10,
      fontSize: 16,
    },
    errorText: {
      color: "red",
      fontSize: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: 20,
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    info: {
      fontSize: 16,
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: 10,
    },
    typesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    type: {
      backgroundColor: "#e0e0e0",
      padding: 8,
      marginRight: 8,
      marginBottom: 8,
      borderRadius: 5,
      textTransform: "capitalize",
    },
    abilitiesContainer: {
      marginBottom: 10,
    },
    ability: {
      fontSize: 16,
      marginBottom: 5,
      textTransform: "capitalize",
    },
    statsContainer: {
      marginBottom: 10,
    },
    stat: {
      fontSize: 16,
      marginBottom: 5,
      textTransform: "capitalize",
    },
    batteryInfoBanner: {
      backgroundColor: "#3b82f6",
      padding: 12,
      borderRadius: 8,
      marginBottom: 20,
      alignItems: "center",
    },
    batteryInfoText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });