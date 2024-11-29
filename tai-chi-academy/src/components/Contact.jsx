import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data (e.g., send to an API)
      console.log("Form submitted", formData);
    }
  };

  return (
    <>
      <section className="signup-section" id="signup">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">
                Schrijf je in voor je eerste gratis proefles!
              </h2>

              <form
                className="form-signup"
                id="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    id="emailAddress"
                    name="email"
                    type="email"
                    placeholder="Enter email address..."
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter your phone number..."
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && (
                    <div className="text-danger">{errors.phoneNumber}</div>
                  )}
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Write your message..."
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
