import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../services/API";
import "./Register.css";

const Register = () => {
  return (
    <>
      <section className="register_section">
        <div className="form-container">
          <div className="register-container">
            <h2>Please, register :3</h2>
          </div>
          <form>
            <label htmlFor="petName">Name</label>
            <input type="text" id="petName" name="petName" />

            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <label htmlFor="avatar">Avatar</label>
            <div class="button-wrapper">
              <span class="label">Upload File</span>

              <input
                type="file"
                name="upload"
                id="upload"
                class="upload-box"
                placeholder="Upload File"
              />
            </div>

            <label htmlFor="type">Type</label>
            <input type="text" id="type" name="type" />

            <button type="submit">Register</button>
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
};

export default Register;
