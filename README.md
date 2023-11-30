# Task App with Realm and React Native

## 🚀 Installation and Setup

- [Setup development Environment](https://reactnative.dev/docs/environment-setup)
- Build/Run on iOS 🍎
```
yarn ios
```
```
npm run ios
```
- Build/Run on Android 🤖
```
yarn android
```
```
npm run android
```
## 💻 Start the Dev Client

```
expo start --dev-client
```
```
yarn start
```
```
npm run start
```


## 📖 Overview

This React Native app utilizes Realm for local data storage and synchronization, enabling an offline-first experience.

### Using Expo with Realm
Expo is a framework that simplifies the development, build, and deployment process for React Native applications. In this project, we've used the Realm Expo template, which provides a fully working React Native application setup with Realm. This setup is crucial as Realm doesn't work with Expo out of the box. The template includes compatible versions of Expo, React Native, and Realm, enabling seamless integration and development experience. For more information on using Expo with Realm, refer to the [MongoDB documentation](https://www.mongodb.com/docs/realm/sdk/react-native/integrations/expo/).

### Environment Variables
Sensitive information, such as the `apiKey`, is stored in environment variables to enhance security. These variables are defined in a `.env` file, which is not tracked in the version control system to prevent exposure of sensitive data.

### Realm in the Project
Realm is used extensively in this project for local data storage and synchronization. We utilized Realm's `useRealm` and `useQuery` hooks for reactive data management and efficient data fetching. The app's state management is handled through these hooks, ensuring that UI updates reflect the latest data from the Realm database, both online and offline.

### Realm Features Used
- **Flexible Sync**: Syncs data between the local Realm database and MongoDB Atlas.
- **Offline-First Approach**: Enables app functionality even without an internet connection.
- **Reactive Data Management**: Updates UI reactively based on data changes.

### Persistent Store
The app uses `@realm/react` and `realm` packages for local data storage. Data is stored in Realm objects, defined in schemas like `OfferSchema`. Realm's local database syncs seamlessly with MongoDB Atlas when online.

### State Management and Data Fetching
State management is handled reactively using Realm's `useQuery` hook. Data is fetched and stored in Realm's local database, allowing for both online and offline access.

### Tracking User Interactions
To track interactions with discount codes, we could increment the `clickCount` field in the `Offer` Realm object.
 This update would be captured even offline and synced back to the server when online.


### Interesting Realm Features
- **Real-time Data Sync**: Continuously syncs data in real-time between devices and the backend.
- **Data Encryption**: Offers encryption for data at rest, ensuring data security.
- **Query-Based Sync**: Sync specific data subsets based on queries, optimizing data usage.

### Deliverables
- **GitHub Repository**: Contains the React Native app with offline-first capabilities.
- **Packages and Libraries**: Utilizes `@realm/react` for React integration and `realm` for local storage and sync.
- **Data Management**: Outlines our approach for local storage, state management, and user interaction tracking.
