import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#1f2937',
    },
    content: {
      width: '100%',
      alignItems: 'center',
    },
    batteryContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    emoji: {
      fontSize: 80,
      marginBottom: 20,
    },
    percentage: {
      fontSize: 64,
      fontWeight: 'bold',
      color: '#1f2937',
    },
    progressBarContainer: {
      width: '100%',
      height: 20,
      backgroundColor: '#e5e7eb',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 40,
    },
    progressBar: {
      height: '100%',
      borderRadius: 10,
    },
    refreshButton: {
      backgroundColor: '#3b82f6',
      paddingHorizontal: 32,
      paddingVertical: 16,
      borderRadius: 12,
    },
    refreshButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    loadingText: {
      fontSize: 18,
      color: '#6b7280',
    },
    errorTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#dc2626',
      marginBottom: 16,
      textAlign: 'center',
    },
    errorMessage: {
      fontSize: 16,
      color: '#6b7280',
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
      paddingHorizontal: 20,
    },
    retryButton: {
      backgroundColor: '#ef4444',
      paddingHorizontal: 32,
      paddingVertical: 16,
      borderRadius: 12,
    },
    infoMessage: {
      fontSize: 14,
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: 20,
      fontStyle: 'italic',
    },
  });

