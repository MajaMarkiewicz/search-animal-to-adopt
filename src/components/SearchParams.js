import React, { useState, useEffect } from 'react'
import useDropdown from "./useDropdown";
import pet, { ANIMALS } from '@frontendmasters/pet'


const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA")
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds)

  useEffect(()=>{
    pet.breeds("dog").then(console.log, console.error)
  })

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input id="location"
                 value={location}
                 placeholder="location"
                 onChange={ e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown></AnimalDropdown>
        <BreedDropdown></BreedDropdown>
        <button> Submit </button>
      </form>
    </div>
  )
}

export default SearchParams
