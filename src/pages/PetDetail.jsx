import React, { useContext, useEffect, useState } from 'react';
import { JwtContext } from '../contexts/jwtContext';
import { useParams } from 'react-router-dom'
import { API } from '../services/API';

const PetDetail = () => {
  const { id } = useParams();
  const [petOtherDetail, setPetOtherDetail] = useState(undefined)

  const getPetById = async () => {
    API.get(`/pets/${id}`).then((res) =>{
    setPetOtherDetail(res.data);
    });
  };

  useEffect(() => {
    getPetById();
    console.log(id)
  }, []);

  
  return (
    <figure className='pet_detail'>
      {petOtherDetail != undefined ? (
        <>
          <h2>{petOtherDetail.petName}</h2>
          <img src={petOtherDetail.avatar} alt={petOtherDetail.petName} />
          <h3>{petOtherDetail.type}</h3>
          {/*TODO: ARRAY DE IMAGENES SE PINTA ACA*/}
        </>
      ) : (<p>Loading...</p>)}
    </figure>
  )
}

export default PetDetail