import React from 'react';
import '../components/styles/Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pengiriman pesan bisa ditambahkan di sini
    alert("Pesan Anda telah dikirim! (Hanya Simulasi)");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's connect</h2>
      <p className="contact-description">
        Have a project idea or just want to say hello? I'm always open to new discussions.
      </p>

      <div className="contact-wrapper">
        <div className="contact-info-cards">
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div className="info-text">
              <h3>Email</h3>
              <p>khotamihusnul@gmail.com</p>
              <a href="mailto:khotamihusnul@gmail.com">Kirim Pesan</a>
            </div>
          </div>

          <div className="info-card">
            <FaLinkedin className="info-icon" />
            <div className="info-text">
              <h3>LinkedIn</h3>
              <p>Husnul Khotami</p>
              <a href="https://www.linkedin.com/in/husnul-khotami" target="_blank" rel="noopener noreferrer">Kunjungi Profil</a>
            </div>
          </div>

          <div className="info-card">
            <FaGithub className="info-icon" />
            <div className="info-text">
              <h3>GitHub</h3>
              <p>Nullnull</p>
              <a href="https://github.com/HusnulKhotami" target="_blank" rel="noopener noreferrer">Lihat Repositori</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter Your Name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="email@contoh.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="What do you want to say?" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Kirim Pesan <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;