import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <>
      {" "}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Tai Chi Academy</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Empowering Mind, Body, and Spirit Through the Art of Tai Chi
              </h2>
              <Link className="btn btn-primary" to="#about">
                Meer information
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4">Welcome to the Tai Chi Academy</h2>
              <p class="text-white-50">
                At the Tai Chi Academy, we are dedicated to promoting health,
                inner peace, and vitality through the ancient art of Tai Chi.
                Whether you're a beginner seeking balance and relaxation or an
                advanced practitioner looking to deepen your understanding, our
                academy offers a welcoming space for everyone. Why Choose Tai
                Chi? Tai Chi is a time-honored practice that harmonizes body,
                mind, and spirit. It combines gentle, flowing movements with
                focused breathing and mindfulness, providing benefits such as:
                Stress Reduction: Achieve calmness and clarity in your daily
                life. Improved Health: Boost flexibility, balance, and
                circulation. Energy Flow: Enhance your body's natural energy, or
                "Qi." What We Offer Expert Instructors: Guided by skilled
                teachers with years of experience. Comprehensive Classes: From
                beginner fundamentals to advanced techniques. Workshops &
                Events: Explore specialized forms and Tai Chi philosophy.
                Holistic Community: Join a supportive group of like-minded
                individuals. Whether you're here to nurture your health, find
                inner peace, or explore the deeper philosophy of Tai Chi, the
                Tai Chi Academy is the perfect place to begin or continue your
                journey. Step into a world of tranquility and energy. Let’s
                move, breathe, and grow together. Welcome to the Tai Chi
                Academy.
              </p>
            </div>
          </div>
          <img
            class="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmZToyr41om8dizd72xZPgvNVxL0YgPONig&s"
            alt="..."
          />
        </div>
      </section>
    </>
  );
}

export default Home;
