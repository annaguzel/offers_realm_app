import React from 'react';
import {useApp,AppProvider, UserProvider, RealmProvider} from '@realm/react';
import {FetchOffers} from './FetchOffers';
import {OfferSchema} from './realmConfig';
import { View, Button, StyleSheet } from 'react-native';


export const AppWrapperSync = () => {
  const realmAccessBehavior = {
    type: 'downloadBeforeOpen',
    timeOutBehavior: 'openLocalRealm',
    timeOut: 1000,
  };
  return (
    <AppProvider id="offers-jvqlk">
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

function LogIn() {
  const app = useApp();
  const apiKey =
    'HjkbIHc6bJ4w1Rbpf9xB3hDWLiL4TB0JCXFLlQKOsUJuVxASr7jP3BBadAejGECx'; 

  async function logInUser() {
    try {
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

