<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useParams } from "react-router-dom";
import { API } from "../services/API";
import "./PetDetail.css";
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { API } from '../services/API';
import './PetDetail.css'
>>>>>>> 84b9cd5dc0127877674967688f54cec10ca03690

const PetDetail = () => {
  const { id } = useParams();
  const [petOtherDetail, setPetOtherDetail] = useState(undefined);

  const getPetById = async () => {
    API.get(`/pets/${id}`).then((res) => {
      setPetOtherDetail(res.data);
    });
  };

  useEffect(() => {
    getPetById();
    console.log(id);
  }, []);

<<<<<<< HEAD
=======
  //Un ternario dentro de otro ternario xD (vaya dolor de cabeza, pero funciona xD)
>>>>>>> 84b9cd5dc0127877674967688f54cec10ca03690
  return (
    <figure className="pet_detail">
      {petOtherDetail != undefined ? (
        <>
<<<<<<< HEAD
          <img src={petOtherDetail.avatar} alt={petOtherDetail.petName} />
          <h2>{petOtherDetail.petName}</h2>
=======
          {petOtherDetail.avatar != "undefined" ? (
            <>
              <div className='detail_img_container'>
                <img src={petOtherDetail.avatar} alt="Pet Avatar" />
              </div>
            </>
          ) : (
            <>
              <div className='detail_img_container'>
                <img src="https://codoacodo.app/sites/default/files/img/product/noimage_1.jpg" alt="Pet Avatar" />
              </div>
            </>
          )}
          <h2>Name: {petOtherDetail.petName}</h2>
>>>>>>> 84b9cd5dc0127877674967688f54cec10ca03690
          <h3>Species: {petOtherDetail.type}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </figure>
  );
};

export default PetDetail;
