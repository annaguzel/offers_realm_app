import React from 'react';
import { useApp, AppProvider, UserProvider, RealmProvider } from '@realm/react';
import { FetchOffers } from './FetchOffers';
import { OfferSchema } from './realmConfig';
import { View, Button, StyleSheet } from 'react-native';

// Main app component to set up Realm and provide it to the child components
export const AppWrapperSync = () => {
  // Retrieve your app ID from environment variables
  const appId = process.env.EXPO_PUBLIC_APP_ID;
  
  // Configurations for Realm's sync behavior
  const realmAccessBehavior = {
    type: 'downloadBeforeOpen',
    timeOutBehavior: 'openLocalRealm',
    timeOut: 1000,
  };

  return (
    <AppProvider id={appId}>
      <UserProvider fallback={<LogIn />}>
        <RealmProvider schema={[OfferSchema]} sync={{
            flexible: true,
            newRealmFileBehavior: realmAccessBehavior,
            existingRealmFileBehavior: realmAccessBehavior,
          }}>
          <FetchOffers />
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};

// Component for user login
function LogIn() {
  // Retrieve your API key from environment variables
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const app = useApp();
  async function logInUser() {
    try {
      // Log in to Realm using the API key
      const credentials = Realm.Credentials.apiKey(apiKey);
      const user = await app.logIn(credentials);
      console.log('User logged in:', user.id);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Log In" onPress={logInUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppWrapperSync;
