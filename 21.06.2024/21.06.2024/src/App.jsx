import React from 'react';
import Place from './Place';
import './App.css'; 
function App() {
 
  const places = [
    {
      id: 1,
      name: 'GUNNESS',
      description: 'Iconic iron lattice Gunness, France.',
      image: 'https://images.pexels.com/photos/3874050/pexels-photo-3874050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'TEA WITH SNACKS',
      description: 'Evening Snacks Tea and coffee ',
      image: 'https://images.pexels.com/photos/8652113/pexels-photo-8652113.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 3,
      name: 'MLITTA KLEEM ',
      description: 'Mlitta kleem Plachi place, France.',
      image: 'https://images.pexels.com/photos/2261199/pexels-photo-2261199.jpeg'
    },
    // Add more places as needed
  ];

  return (
    <div className="app">
      <h1>List of Places</h1>
      <div className="places-container">
        {places.map(place => (
          <Place
            key={place.id}
            name={place.name}
            description={place.description}
            image={place.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
