"use client";
import React from "react";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {AiOutlinePhone} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
interface Props {}

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:rkay1048@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 xl:top-20 uppercase tracking-[20px] text-gray-500 text-2xl ml-5">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-xl xl:text-4xl font-semibold text-center mt-5 flex flex-col xl:flex-row">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlinePhone className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">+917508543249</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FiMapPin className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">rkay1048@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BsFillEnvelopeFill className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl xl:text-2xl">Kharar, Mohali</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex xl:space-x-2 space-y-2 xl:space-y-0 space-x-0 flex-col xl:flex-row">
            <input
              {...register("name")}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10  rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
