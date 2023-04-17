import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'

import {
  DevicePhoneMobileIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sroutfit@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} from:${formData.email}`
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        {/* <h4 className="text-4xl font-semibold text-center">
          I have got just what you need. {''}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4> */}

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <DevicePhoneMobileIcon className="text-[#178fe6] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+610421565952</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#178fe6] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Sydney, Australia</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#178fe6] h-7 w-7 animate-pulse" />
            <p className="text-2xl">sroutfit@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register('email')}
              placeholder="email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            className="bg-[#178fe6] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
