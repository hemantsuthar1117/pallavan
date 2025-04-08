import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, HelperText, List } from 'react-native-paper';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const SignupScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    bloodGroup: '',
    state: '',
    district: '',
    tehsil: '',
  });
  const [showBloodGroups, setShowBloodGroups] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = 'Invalid phone number';
    }
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.district) newErrors.district = 'District is required';
    if (!formData.tehsil) newErrors.tehsil = 'Tehsil is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('OTP', { phoneNumber: formData.phoneNumber });
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join our blood donation community</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          mode="outlined"
          label="Full Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          style={styles.input}
          error={!!errors.name}
        />
        <HelperText type="error" visible={!!errors.name}>
          {errors.name}
        </HelperText>

        <TextInput
          mode="outlined"
          label="Phone Number"
          value={formData.phoneNumber}
          onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.input}
          error={!!errors.phoneNumber}
        />
        <HelperText type="error" visible={!!errors.phoneNumber}>
          {errors.phoneNumber}
        </HelperText>

        <TextInput
          mode="outlined"
          label="Blood Group"
          value={formData.bloodGroup}
          onFocus={() => setShowBloodGroups(true)}
          style={styles.input}
          error={!!errors.bloodGroup}
        />
        {showBloodGroups && (
          <List.Section style={styles.dropdown}>
            {bloodGroups.map((group) => (
              <List.Item
                key={group}
                title={group}
                onPress={() => {
                  setFormData({ ...formData, bloodGroup: group });
                  setShowBloodGroups(false);
                }}
              />
            ))}
          </List.Section>
        )}
        <HelperText type="error" visible={!!errors.bloodGroup}>
          {errors.bloodGroup}
        </HelperText>

        <TextInput
          mode="outlined"
          label="State"
          value={formData.state}
          onChangeText={(text) => setFormData({ ...formData, state: text })}
          style={styles.input}
          error={!!errors.state}
        />
        <HelperText type="error" visible={!!errors.state}>
          {errors.state}
        </HelperText>

        <TextInput
          mode="outlined"
          label="District"
          value={formData.district}
          onChangeText={(text) => setFormData({ ...formData, district: text })}
          style={styles.input}
          error={!!errors.district}
        />
        <HelperText type="error" visible={!!errors.district}>
          {errors.district}
        </HelperText>

        <TextInput
          mode="outlined"
          label="Tehsil"
          value={formData.tehsil}
          onChangeText={(text) => setFormData({ ...formData, tehsil: text })}
          style={styles.input}
          error={!!errors.tehsil}
        />
        <HelperText type="error" visible={!!errors.tehsil}>
          {errors.tehsil}
        </HelperText>

        <Button
          mode="contained"
          onPress={handleSignup}
          loading={isLoading}
          disabled={isLoading}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Sign Up
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate('Login')}
          style={styles.loginLink}
          labelStyle={styles.loginText}
        >
          Already have an account? Login
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E53935',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  form: {
    padding: 20,
  },
  input: {
    marginBottom: 4,
    backgroundColor: '#FFFFFF',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#E53935',
  },
  buttonContent: {
    height: 48,
  },
  loginLink: {
    marginTop: 16,
  },
  loginText: {
    color: '#E53935',
  },
});

export default SignupScreen;