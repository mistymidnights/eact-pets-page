import React from 'react'
import { Link } from 'react-router-dom'
import './PetCard.css'

const PetCard = ({ pet }) => {
  return (
    <figure className='pet_card'>
        <div className='profile_img_container'>
            {/*TODO: Quiero que no se muestre la imagen rota si el perfil no tiene avatar todavia, pero no se como hacerlo, preguntarle a Antonio mañana 29.07.2022*/}
            {pet.avatar != undefined ? (<img src={pet.avatar} alt={pet.petName} />) : (<p>No Avatar yet!🙀</p>) }
        </div>
        <div className='contnet_container'>
            <h2>{pet.petName}</h2>
            <h3>{pet.type}</h3>
            <Link to={`/pets/${pet._id}`} >Pictures 😺</Link>
            {/*TODO: creo que toca modificar el modelo, y reiniciar la base de datos y eso. Porque me ha faltado poner un "status" al modelo para que slaga si esta conectado o no :/, pero no es nada grave. Pues todo lo del back funciona de maravilla!*/}
            {pet != undefined ? <p>Connected</p> : <p>Disconnected</p>}
        </div>
    </figure>
  )
}

export default PetCard