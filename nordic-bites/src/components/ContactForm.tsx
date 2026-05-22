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

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nafn er skilyrt";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Netfang er ekki gilt";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Skilaboð vantar";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Skilaboð send!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nafn"
        onChange={handleChange}
      />

      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Netfang"
        onChange={handleChange}
      />

      {errors.email && <p>{errors.email}</p>}

      <select
        name="subject"
        onChange={handleChange}
      >
        <option>Almenn fyrirspurn</option>
        <option>Bókanir</option>
        <option>Fyrirtækjaþjónusta</option>
      </select>

      <textarea
        name="message"
        placeholder="Skilaboð"
        onChange={handleChange}
      />

      {errors.message && <p>{errors.message}</p>}

      <button type="submit">
        Senda
      </button>
    </form>
  );
}

export default ContactForm;