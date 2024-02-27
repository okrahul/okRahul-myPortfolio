import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "./Alert";
import { useEffect } from "react";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (showMsg) {
      setTimeout(() => {
        setShowMsg(false);
      }, 3000);
    }
  }, [showMsg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Rahul Sharma",
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setLoading(false);
            setShowMsg(true);

            setFormData((prevData) => ({
              ...prevData,
              email: "",
              message: "",
              name: "",
            }));
          }
        },
        (error) => {
          console.log("Error", error);
          setLoading(false);
        }
      )
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900" id="contact">
      <div className="py-4 lg:py-8 px-4 mx-auto max-w-screen-md">
        <span className="flex justify-center items-center text-center text-3xl font-semibold text-yellow-400 sm:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
            Let's Connect
          </span>
        </span>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 dark:text-gray-400 sm:text-lg">
          Get in touch! If you have a question in mind, feel free to contact me.
        </p>

        {showMsg && <Alert />}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          {/* bg-slate-600 */}

          <button
            type="submit"
            className="sm:py-3 sm:px-5 py-2 px-2 text-sm font-medium text-center bg-indigo-600 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
            disabled={loading}
          >
            <span className="flex flex-row justify-center items-center gap-1">
              {loading ? "Sending..." : "Send message"}{" "}
              {!loading && (
                <ion-icon name="mail-outline" size="small"></ion-icon>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
