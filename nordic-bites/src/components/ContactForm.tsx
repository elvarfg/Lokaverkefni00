import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "Almenn fyrirspurn",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setIsSubmitted(false);
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) {
      newErrors.name = "Nafn þarf að vera að minnsta kosti 2 stafir.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Netfang er skilyrt.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Sláðu inn gilt netfang.";
    }

    if (!formData.subject) {
      newErrors.subject = "Veldu tegund fyrirspurnar.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Skilaboð þurfa að vera að minnsta kosti 10 stafir.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "Almenn fyrirspurn",
        message: "",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSubmitted && (
        <div className="success-message">
          Takk fyrir skilaboðin! Við svörum eins fljótt og við getum.
        </div>
      )}

      <input
        type="text"
        name="name"
        placeholder="Nafn"
        value={formData.name}
        onChange={handleChange}
        required
        aria-label="Nafn"
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Netfang"
        value={formData.email}
        onChange={handleChange}
        required
        aria-label="Netfang"
      />
      {errors.email && <p className="error-message">{errors.email}</p>}

      <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        aria-label="Tegund fyrirspurnar"
      >
        <option value="Almenn fyrirspurn">Almenn fyrirspurn</option>
        <option value="Bókanir">Bókanir</option>
        <option value="Fyrirtækjaþjónusta">Fyrirtækjaþjónusta</option>
      </select>

      {errors.subject && <p className="error-message">{errors.subject}</p>}

      <textarea
        name="message"
        placeholder="Skilaboð"
        value={formData.message}
        onChange={handleChange}
        required
        aria-label="Skilaboð"
      />

      {errors.message && <p className="error-message">{errors.message}</p>}

      <button type="submit">Senda</button>
    </form>
  );
}

export default ContactForm;
