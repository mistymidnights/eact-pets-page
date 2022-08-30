import { useContext } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../contexts/jwtContext";
import { API } from "../services/API";

const Profile = () => {
  const {pet, logout} = useContext(JwtContext);
  const {register, handleSubmit} = useForm();
  let navigate = useNavigate();

  const defaultValues = {
    petName: pet.petName
  }

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("petName", data.petName);
    formData.append("avatar", data.avatar[0]);
    formData.append("type", data.type);

    API.patch(`/pets/${pet._id}`, formData).then((res) => {
      if (res) {
        logout()
        navigate("/login");
      }
    })
  };

  return (
    <section>
      <h2>Profile</h2>
      <div>
        <img src={pet.avatar} alt={pet.name} />
        
        <form onSubmit={handleSubmit(formSubmit)}>
          <label htmlFor="petName">Edit Pet Name?</label>
          <input type="text" id="petName" name="petName" {...register("petName")} defaultValue={defaultValues.petName} />

          <label htmlFor="avatar">Change Avatar?</label>
          <input type="file" id="avatar" name="avatar" {...register("avatar")} />

          <label htmlFor="type">Change Species?</label>
          <input type="text" id="type" name="type" {...register("type")} placeholder="Cat? Dog?... Capybara?" />

          <button type="submit">Edit Profile</button>
        </form>
      </div>

    </section>
  )
}

export default Profile