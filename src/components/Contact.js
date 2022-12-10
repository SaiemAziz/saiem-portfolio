import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
  let contactForm = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let subject = e.target.subject.value;
    let details = e.target.details.value;
    emailjs
      .sendForm(
        "service_zr62deg",
        "template_ex9a9ot",
        form.current,
        "tCIA8RuTnvZvlOuHS"
      )
      .then(
        (result) => {
          toast.success("Email Sent Successfully");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="mb-10 mx-5">
      <h1 className="text-6xl italic text-success font-semibold mb-5">
        Contact ME
      </h1>
      <form
        ref={form}
        onSubmit={contactForm}
        className="card glass max-w-3xl mx-auto p-5"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input text-success input-bordered input-accent w-full mb-2 placeholder:text-success"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="text-info input input-bordered input-accent w-full my-2 placeholder:text-info"
        />
        <textarea
          className="textarea textarea-success mt-2 placeholder:text-white"
          name="details"
          placeholder="Details"
        ></textarea>
        <input
          type="submit"
          className="mt-5 btn btn-success btn-outline btn-lg px-10 ml-auto"
          value="send"
        />
      </form>
    </div>
  );
};

export default Contact;
// data-aos='zoom-out' data-aos-easing="ease-in-sine"
