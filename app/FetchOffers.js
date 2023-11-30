import React, {useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useRealm, useQuery} from '@realm/react';
import OfferCard from './OfferCard';

export const FetchOffers = () => {
  const realm = useRealm();

  useEffect(() => {
    const offersQuery = realm.objects('offer');
    const subscription = offersQuery.subscribe();
  }, [realm]);

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

