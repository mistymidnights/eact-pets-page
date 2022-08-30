import React, { useContext, useEffect, useState } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useParams } from "react-router-dom";
import { API } from "../services/API";
import "./PetDetail.css";

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

  return (
    <figure className="pet_detail">
      {petOtherDetail != undefined ? (
        <>
          <img src={petOtherDetail.avatar} alt={petOtherDetail.petName} />
          <h2>{petOtherDetail.petName}</h2>
          <h3>Species: {petOtherDetail.type}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </figure>
  );
};

export default PetDetail;
