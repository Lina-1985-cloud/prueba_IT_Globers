import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Subscribe() {
  const [state, handleSubmit] = useForm("mlevjbpk");
  if (state.succeeded) {
    return <p className="form__text">Gracias por suscribirte!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="form__input" id="email" type="email" name="email" placeholder="Ingresa tu email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button className="form__button" type="submit" disabled={state.submitting}>
        <BsArrowRightShort style={{fontSize:'2rem'}}/>
      </button>
    </form>
  );
}
