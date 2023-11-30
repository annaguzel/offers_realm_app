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

### Persistent Store
The app uses `@realm/react` and `realm` packages for local data storage. Data is stored in Realm objects, defined in schemas like `OfferSchema`. Realm's local database syncs seamlessly with MongoDB Atlas when online.

### State Management and Data Fetching
State management is handled reactively using Realm's `useQuery` hook. Data is fetched and stored in Realm's local database, allowing for both online and offline access.

### Tracking User Interactions
To track interactions with discount codes, we could increment the `clickCount` field in the `Offer` Realm object.
 This update would be captured even offline and synced back to the server when online.

### Deliverables
- **GitHub Repository**: Contains the React Native app with offline-first capabilities.
- **Packages and Libraries**: Utilizes `@realm/react` for React integration and `realm` for local storage and sync.
- **Data Management**: Outlines our approach for local storage, state management, and user interaction tracking.
