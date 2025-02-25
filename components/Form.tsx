import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  return (
    <section id="ContactMe">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <form
          onSubmit={async (e) => {
            setButtonDisable(true);
            e.preventDefault();
            axios
              .post("/api/airtable", {
                name: name,
                email: email,
                message: message,
              })
              .then(function (response) {
                setName("");
                setEmail("");
                setMessage("");
                if (response) {
                  setButtonDisable(false);
                  toast.success(
                    "your message has been sent! I will respond in the next 24-48 hours.",
                    {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                }
              })
              .catch(function (error) {
                setButtonDisable(false);
                toast.error("your message did not send. Please try again..", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                console.log(error);
              });
          }}
          action="#"
          className="space-y-8"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Name
              <input
                value={name}
                autoComplete="name"
                type="text"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Smith"
                required
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Email
              <input
                value={email}
                type="email"
                autoComplete="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
              <textarea
                value={message}
                id="message"
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            disabled={buttonDisable}
            className="py-3 px-5 text-sm ring-primary-300 font-medium text-center text-grey-600 opacity-75 rounded-lg bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 sm:w-fit transition duration-500 hover:opacity-100 hover:ring-2 focus:ring-4 focus:outline-none dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
