import React from 'react'

import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      // className="w-32 h-32 rounded-full xl:w-[200px] xl:h=[200px] object-cover object-center"
      className="top-8 md:top-15 flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
      // className="flex flex-col relative h-screen md:flex-row w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden cursor-pointer"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        // className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        className="w-12 h-12 md:w-32 md:h-32 rounded object-fill object-center mt-20"
        src={urlFor(experience.companyImage).url()} //ImageUrlBuilder.url()
        alt=""
      />

      <div className="px-0 md:px-10 space-y-2">
        <h4 className="text-xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        {/* <h4 className="text-4xl font-light">Junior Developer</h4> */}
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        {/* <p className="font-bold text-2xl mt-1">Ebix Australia</p> */}
        <div
          className="flex space-x-2 my-2 items-center justify-end md:justify-center"
          // className="flex space-x-2"
        >
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full ml-20"
              src={urlFor(tech.image).url()}
              alt="Ebix"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'present'
            : new Date(experience.dateStarted).toDateString()}
          {/* Start Date ... - End date ... */}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg py-10">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
