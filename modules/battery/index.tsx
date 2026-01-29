import { useBattery } from "@/api/hooks/useBattery";
import { useEffect } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { getBatteryColor, getBatteryEmoji } from "./utils";

const Battery = () => {
    const { batteryLevel, loading, error, getBatteryLevelAsync } = useBattery();

    useEffect(() => {
      const init = async () => {
        await getBatteryLevelAsync();
      }
      init();
    }, []);


    if (error && !loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Battery Status</Text>
          <View style={styles.content}>
            <Text style={styles.emoji}>⚠️</Text>
            <Text style={styles.errorTitle}>Error Loading Battery</Text>
            <Text style={styles.errorMessage}>{error}</Text>
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={getBatteryLevelAsync}
            >
              <Text style={styles.refreshButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Battery Status</Text>

        <View style={styles.content}>
          <View style={styles.batteryContainer}>
            {!loading && <Text style={styles.emoji}>{getBatteryEmoji(batteryLevel)}</Text>}
            {loading ? (
              <ActivityIndicator size="large" color="#3b82f6" />
            ) : (
              <Text style={styles.percentage}>{batteryLevel}%</Text>
            )}
          </View>

          {!loading && batteryLevel === 0 && (
            <Text style={styles.infoMessage}>
              Battery info unavailable (Simulator)
            </Text>
          )}

          {!loading && (
            <View style={styles.progressBarContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { 
                    width: `${batteryLevel}%`,
                    backgroundColor: getBatteryColor(batteryLevel)
                  }
                ]} 
              />
            </View>
          )}

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={getBatteryLevelAsync}
            disabled={loading}
          >
            <Text style={styles.refreshButtonText}>
              {loading ? 'Fetching...' : 'Refresh'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Battery;