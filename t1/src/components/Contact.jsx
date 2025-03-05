import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control border ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control border ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control border ${darkMode ? "bg-dark text-light" : "bg-white text-dark"}`}
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
