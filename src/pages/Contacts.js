import { useEffect, useRef } from "react";
import StarsCanvas from "./../components/canvas/StarsCanvas";
import { FaMapMarkerAlt, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  const contactListRef = useRef(null);

  useEffect(() => {
    if (contactListRef.current) {
      const items = contactListRef.current.querySelectorAll(
        ".content-list__item"
      );
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("contacts-visible");
        }, index * 100);
      });
    }
  }, []);

  return (
    <main className="section">
      <StarsCanvas />
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list contacts-list" ref={contactListRef}>
          <li className="content-list__item contacts-list__item">
            <h2 className="title-2">
              <FaMapMarkerAlt className="contact-icon" /> Location
            </h2>
            <p>Odesa, Ukraine</p>
          </li>
          <li className="content-list__item contacts-list__item">
            <h2 className="title-2">
              <FaTelegramPlane className="contact-icon" /> Telegram
            </h2>
            <p>
              <a href="tel:+380505839122">+380 (50) 583-91-22</a>
            </p>
          </li>
          <li className="content-list__item contacts-list__item">
            <h2 className="title-2">
              <FaEnvelope className="contact-icon" /> Email
            </h2>
            <p>
              <a href="mailto:kilienko900@gmail.com">kilienko900@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;