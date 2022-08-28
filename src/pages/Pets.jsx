import { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import SearchBar from '../components/SearchBar';
import { API } from '../services/API';
import './Pets.css';

const Pets = () => {
  const [allPets, setAllPets] = useState([]);
  const [filterPet, setFilterPet] = useState("")

  const filteredPets = allPets.filter((pet) =>
  pet.petName.toLowerCase().includes(filterPet) ||
  pet.type.toLowerCase().includes(filterPet)
  );

  const getAllPets = async () => {
    API.get("/pets").then((res) => {
      setAllPets(res.data.pets);
    });
  };

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <section>
      <h2>Pets</h2>
      <SearchBar setFilterPet={setFilterPet} />
      <div className='pets_container'>
        {allPets.length ? 
        filteredPets.map((pet) => <PetCard pet={pet} key={pet._id} />
        ) : (
          <p>Loading Pets...</p>
        )}
      </div>
    </section>
  )
}

export default Pets