import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

/*
 * A generic WebView screen for displaying a local HTML game.  The path to
 * the game is passed via route.params.uri.  A loading indicator is shown
 * until the content is ready.  Note: The react-native-webview package
 * must be installed for this component to work.  Local files are
 * referenced using the `require` syntax when bundled with Expo.
 */

export default function GameWebView({ route }) {
  const { uri } = route.params;
  return (
    <View style={styles.container}>
      <WebView
        source={uri}
        originWhitelist={["*"]}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#32527B" />
          </View>
        )}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
