"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          <div className="flex items-center">
            <h2 className="uppercase text-xl font-bold md:text-3xl mb-4">
              Contact Me
            </h2>
          </div>
        </h5>
        <div className="p-6 grid justify-center justify-items-center w-full">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rq26zx"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ContactMailIcon"
            width="200"
            height="200"
          >
            <path
              d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"
              fill="white"
            ></path>
          </svg>
          <p className="text-sm font-light text-center pt-3 text-white">
            I'm available for new opportunities. Please feel free to contact me
            to discuss further
          </p>
        </div>
      </div>
      <div class="p-8 bg-white text-black rounded-lg shadow-md">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black truncate dark:text-white">
                Hire me!
              </p>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-black truncate dark:text-white">
                  <a
                    href="mailto:nuchning124@gmail.com "
                    class="hover:underline"
                  >
                   nuchning124@gmail.com
                  </a>
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-black dark:text-white">
                <a
                  href="mailto:kornkanok.dev@gmail.com"
                  class="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-black truncate dark:text-white">
                  <a
                    href="https://github.com/nudsarin12 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/nudsarin12
                  </a>
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-black dark:text-white">
                <a
                  href="https://github.com/nudsarin12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </div>
            </div>
          </li>
          {/* <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div class="flex-1 min-w-0 ms-4">
                <p class="text-sm font-medium text-black truncate dark:text-white">
                  <a
                    href="https://medium.com/@kornkanokr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:underline"
                  >
                    medium.com/@kornkanokr
                  </a>
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-black dark:text-white">
                <a
                  href="https://medium.com/@kornkanokr"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faSquareArrowUpRight} />
                </a>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default EmailSection;
