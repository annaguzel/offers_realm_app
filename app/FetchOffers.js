import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { useRealm, useQuery } from '@realm/react';
import OfferCard from './OfferCard';

// Component to fetch and display offers
export const FetchOffers = () => {
  const realm = useRealm();

  useEffect(() => {
    // Query the 'offer' objects from Realm and subscribe to changes
    const offersQuery = realm.objects('offer');
    const subscription = offersQuery.subscribe();
  }, [realm]);

  // Use the useQuery hook to reactively update the offers list
  const offers = useQuery('offer');

  if (!offers) {
    return <Text style={styles.loadingText}>Loading offers...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {offers.map(offer => (
        <OfferCard key={offer._id} offer={offer} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default FetchOffers;
