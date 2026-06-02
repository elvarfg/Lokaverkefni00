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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setIsSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nafn er skilyrt";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Netfang er skilyrt";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Netfang er ekki gilt";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Skilaboð vantar";
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
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Netfang"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}

      <select name="subject" value={formData.subject} onChange={handleChange}>
        <option>Almenn fyrirspurn</option>
        <option>Bókanir</option>
        <option>Fyrirtækjaþjónusta</option>
      </select>

      <textarea
        name="message"
        placeholder="Skilaboð"
        value={formData.message}
        onChange={handleChange}
      />

      {errors.message && <p className="error-message">{errors.message}</p>}

      <button type="submit">Senda</button>
    </form>
  );
}

export default ContactForm;
