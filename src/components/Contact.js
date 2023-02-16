import React from "react";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <div className="section" style={{ marginBottom: "0" }}>
      <ul>
        <li>
          <h4>
            <a className="contact" href="mailto:timsjdev@gmail.com">
              <IoIosMail /> &nbsp;&nbsp;timsjdev@gmail.com
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              className="contact"
              href="https://github.com/timsj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub /> &nbsp;&nbsp;github.com/timsj
            </a>
          </h4>
        </li>
        <li>
          <h4>
            <a
              className="contact"
              href="https://www.linkedin.com/in/timsjoh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin /> &nbsp;&nbsp;linkedin.com/in/timsjoh
            </a>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
