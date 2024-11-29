function Tarieven() {
  return (
    <>
      <section className="about-section text-center" id="pricing">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">Pricing</h2>
              <p className="text-white-50">
                Unlock your potential with our tailored training plans. No
                matter where you are in your fitness journey, we’ve got
                something for you. From single lessons to long-term commitments,
                our transparent pricing ensures flexibility and value for
                everyone. Join us to experience expert coaching, motivating
                group sessions, and a plan that grows with you. Take the first
                step today, and choose the option that fits your goals. Whether
                it's occasional training or unlimited access, we’ve got you
                covered!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">1 Group Lesson</h5>
                  <h2 className="card-price">
                    $9<span className="text-muted fs-6">/lesson</span>
                  </h2>
                  <p className="card-text">
                    Perfect for if you are not sure yet how many days per month
                    you want to train.
                  </p>
                  <ul className="list-unstyled">
                    <li>1 Lesson</li>
                    <li>Group training</li>
                    <li>One group training on a day of your choise</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Group Lessons per Quarter</h5>
                  <h2 className="card-price">
                    $85<span className="text-muted fs-6">/quarter</span>
                  </h2>
                  <p className="card-text">
                    Great for routine and sharp in price, for when you sure you
                    want to train regularly.
                  </p>
                  <ul className="list-unstyled">
                    <li>10 lessons</li>
                    <li>Group training</li>
                    <li>Unlimited acess to group training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card pricing-card">
                <div className="card-body">
                  <h5 className="card-title">Private Lesson</h5>
                  <h2 className="card-price">
                    $30<span className="text-muted fs-6">/private lesson</span>
                  </h2>
                  <p className="card-text">
                    Ideal for personal attention, for training sessions tailored
                    to your needs.
                  </p>
                  <ul className="list-unstyled">
                    <li>1 Private lesson</li>
                    <li>Personal attention</li>
                    <li>Lesson tailored to your needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tarieven;
