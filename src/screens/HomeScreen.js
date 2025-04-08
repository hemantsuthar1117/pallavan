import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Avatar, FAB, Portal, Modal } from 'react-native-paper';

const dummyDonors = [
  { id: 1, name: 'John Doe', bloodGroup: 'A+', distance: '2.5 km' },
  { id: 2, name: 'Jane Smith', bloodGroup: 'O-', distance: '3.1 km' },
  { id: 3, name: 'Mike Johnson', bloodGroup: 'B+', distance: '4.0 km' },
];

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleRequestBlood = () => {
    // Implement blood request logic
    hideModal();
  };

  const renderDonorCard = (donor) => (
    <Card key={donor.id} style={styles.card}>
      <Card.Title
        title={donor.name}
        subtitle={`Blood Group: ${donor.bloodGroup} | ${donor.distance}`}
        left={(props) => (
          <Avatar.Icon {...props} icon="account" backgroundColor="#E53935" />
        )}
      />
      <Card.Actions>
        <Button mode="outlined" onPress={() => {}} style={styles.contactButton}>
          Contact
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Available Donors</Text>
          <Text style={styles.subtitle}>Find blood donors near you</Text>
        </View>

        <View style={styles.donorList}>
          {dummyDonors.map(renderDonorCard)}
        </View>
      </ScrollView>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.modalTitle}>Request Blood</Text>
          <Text style={styles.modalText}>
            Are you sure you want to send a blood request?
          </Text>
          <View style={styles.modalActions}>
            <Button onPress={hideModal} style={styles.modalButton}>
              Cancel
            </Button>
            <Button
              mode="contained"
              onPress={handleRequestBlood}
              style={[styles.modalButton, styles.confirmButton]}
            >
              Confirm
            </Button>
          </View>
        </Modal>
      </Portal>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={showModal}
        label="Request Blood"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E53935',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  donorList: {
    gap: 16,
  },
  card: {
    elevation: 2,
  },
  contactButton: {
    borderColor: '#E53935',
    borderRadius: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#E53935',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666666',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  modalButton: {
    minWidth: 100,
  },
  confirmButton: {
    backgroundColor: '#E53935',
  },
});

export default HomeScreen;