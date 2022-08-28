import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setPet } = useContext(JwtContext);

  const formSubmit = (formData) => {
    API.post("/pets/login", formData).then((res) => {
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("pet", JSON.stringify(res.data.petInDb))
      setJwt(res.data.token);
      setPet(res.data.petInDb);
      if(res.data.token) {
        navigate("/pets")
      }
    });

  };

  return (
    <>
      <section className="register_section">
        <div className="form-container">
          <div className="login-container">
            <h2>Log In! 🐶</h2>
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" name="email" {...register("email")} />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
            />

            <button type="submit">Log In</button>
          </form>
        </div>
        <div className="background-pet">
          <img
            src="https://www.kindpng.com/picc/m/588-5883044_kittens-transparent-persian-cat-cute-white-background-hd.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Login