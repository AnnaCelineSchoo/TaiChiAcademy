import { useState } from "react";
import { Link } from "react-router-dom";

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

                <div className="mt-4 mb-7">
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

      <section className="map-section mt-5">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mb-4">Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9776.66198371177!2d5.958902!3d52.222211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4a4945fc5402545!2sVechtsport%3A+Shaolin+Kung+Fu+Apeldoorn!5e0!3m2!1snl!2snl!4v1412235104744"
              width="100%"
              height="450"
              frameBorder="0"
              style={{
                border: 0,
                borderRadius: "10px",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    Mariannalaan 19a, 7316 DS Apeldoorn
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">
                    <a href="#!">addyoutemail@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4 mx-auto" />
                  <div class="small text-black-50">add your phone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
