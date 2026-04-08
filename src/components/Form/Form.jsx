import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  // register = registra los inputs
  // handleSubmit = envuelve el submit entero
  // handleSubmit -> incluye preventDefault()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "El formato del email no es válido",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            {...register("subject", { required: "Selecciona un asunto" })}
          >
            <option value="">Select an option</option>
            <option value="price inquiry">Price Inquiry</option>
            <option value="custom travel">Custom Travel</option>
            <option value="refund">Refund</option>
            <option value="get in touch">Get in Touch</option>
          </select>
          {errors.subject && <p>{errors.subject.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            {...register("message", { required: "El mensaje es obligatorio" })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <div className="form-group">
          <Button
            text={isSubmitting ? "Enviando..." : "Send"}
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          />
          {!isSubmitting && <p>Enviado</p>}
        </div>
      </div>
    </form>
  );
};

export default Form;
