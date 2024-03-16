import React from "react";

const Contact = () => {
  return (
    <section
      className="panels flex h-screen w-screen flex-none shrink-0 snap-start items-center justify-start "
      id="contact-id"
    >
      <div
        className="ml-28 h-fit w-1/3 rounded-xl bg-slate-400/50 p-4 text-center text-white"
        id="contact-card"
      >
        <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-left text-4xl font-bold text-transparent flex">
          Contact Me
          <div className="flex ml-auto gap-2">
            <a
              href="https://www.linkedin.com/in/aditya-singh-83ab3b242/"
              className="h-10 w-10 ml-auto bg-linkedin_icon rounded-full bg-white bg-cover bg-center bg-no-repeat p-1 hover:opacity-70"
            ></a>
            <a
              href="https://twitter.com/aditya_5205"
              className="h-10 w-10 ml-auto bg-x_icon rounded-full bg-white bg-cover bg-center bg-no-repeat p-1 hover:opacity-70"
            ></a>
          </div>
        </div>
        <form className="mt-12 flex h-fit flex-col text-xl">
          <label htmlFor="name-input" className="text-left text-xl">
            Name
          </label>
          <input
            type="text"
            id="name-input"
            // placeholder="Demo..."
            className="mt-3 h-10 rounded-xl bg-slate-200/50 indent-2 outline-none "
          />
          <label htmlFor="email-input" className="mt-6 text-left text-xl">
            Email
          </label>
          <input
            type="text"
            id="email-input"
            className="mt-3 h-10 rounded-xl bg-slate-200/50 indent-2 outline-none "
          />
          <label htmlFor="message-input" className="mt-6 text-left text-xl">
            Message
          </label>
          <textarea
            type="textbox"
            id="message-input"
            className="mt-3 h-32 min-h-10 resize-none rounded-xl bg-slate-200/50 p-2 outline-none max-h-48"
          />
          <button
            type="submit"
            className="mt-3 rounded-3xl bg-blue-500 p-2 hover:bg-blue-600/70"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
