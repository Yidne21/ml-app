import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ireview } from '../slice/types';
import renderStars from '../../../components/Custom/DinamicStar';

function ReviewItem({ review }: { review: Ireview }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: review.user.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.ratingContainer}>
          <Text style={styles.name}>{review.user.name}</Text>
          {renderStars(review.rating, 'reviewItem')}
          <Text style={styles.time}>5m ago</Text>
        </View>
        <Text style={styles.feedback}>{review.feedback}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff', // Set a background color for better visibility
    shadowColor: '#000', // Add shadow for a card-like effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make it fully circular
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Add some space between the rating and feedback
    gap: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'green',
  },
  time: {
    marginLeft: 5,
    color: 'grey',
  },
  feedback: {
    marginTop: 5,
  },
});

export default ReviewItem;
