export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const states = [
  {
    id: 1,
    name: 'Tamil Nadu',
    districts: [
      {
        id: 1,
        name: 'Chennai',
        tehsils: ['Egmore', 'Guindy', 'Mylapore', 'T. Nagar']
      },
      {
        id: 2,
        name: 'Coimbatore',
        tehsils: ['Coimbatore North', 'Coimbatore South', 'Mettupalayam', 'Pollachi']
      },
      {
        id: 3,
        name: 'Madurai',
        tehsils: ['Madurai East', 'Madurai West', 'Melur', 'Peraiyur']
      }
    ]
  },
  {
    id: 2,
    name: 'Kerala',
    districts: [
      {
        id: 1,
        name: 'Thiruvananthapuram',
        tehsils: ['Neyyattinkara', 'Thiruvananthapuram', 'Nedumangad', 'Chirayinkeezhu']
      },
      {
        id: 2,
        name: 'Ernakulam',
        tehsils: ['Kochi', 'Aluva', 'Muvattupuzha', 'Kothamangalam']
      }
    ]
  }
];

export const getDistricts = (stateName) => {
  const state = states.find(s => s.name === stateName);
  return state ? state.districts : [];
};

export const getTehsils = (stateName, districtName) => {
  const state = states.find(s => s.name === stateName);
  if (!state) return [];
  
  const district = state.districts.find(d => d.name === districtName);
  return district ? district.tehsils : [];
};