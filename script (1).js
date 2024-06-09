// script.js

// Get the price range value
const priceRange = document.getElementById('price-range').value;

// Perform search based on selected filters
// Update search results dynamically
function searchProperties() {
  // TO DO: implement search logic here
  console.log('Search properties');
}

// Initialize the map and add property markers
function initMap() {
  const map = new google.maps.Map(document.getElementById('property-map'), {
    center: { lat: 26.1224, lng: 85.3932 }, // Muzaffarpur, Bihar
    zoom: 12
  });

  // Add property markers
  const properties = [
    {
      id: 1,
      title: 'Luxury Apartment',
      address: 'Brahmpura, Muzaffarpur, Bihar',
      price: '₹50,00,000',
      features: ['Pool', 'Gym', 'Parking']
    },
    {
      id: 2,
      title: 'Modern House',
      address: 'Ramna, Muzaffarpur, Bihar',
      price: '₹75,00,000',
      features: ['Backyard', 'Garden', 'Playground']
    },
    // Add more properties here
  ];

  properties.forEach((property) => {
    const marker = new google.maps.Marker({
      position: { lat: 26.1224, lng: 85.3932 },
      map: map,
      title: property.title
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <h2>${property.title}</h2>
        <p>Address: ${property.address}</p>
        <p>Price: ${property.price}</p>
        <p>Features: ${property.features.join(', ')}</p>
      `
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });
}

// Mortgage calculator
function calculateMortgage() {
  const loanAmount = document.getElementById('loan-amount').value;
  const interestRate = document.getElementById('interest-rate').value;
  const loanTerm = document.getElementById('loan-term').value;

  // TO DO: implement mortgage calculation logic here
  console.log('Calculate mortgage');
}

// User registration and favorites
function registerUser() {
  // TO DO: implement user registration logic here
  console.log('Register user');
}

function saveFavorite() {
  // TO DO: implement save favorite logic here
  console.log('Save favorite');
}

// Initialize the map and search functionality
initMap();
searchProperties();