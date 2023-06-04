import React from 'react'

import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      // className=" relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-10 md:top-16 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative mt-20 md:mt-0 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]"
        // className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col overflow-y-scroll space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            // className="w-screen mt-8 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <a href={project.linkToBuild}>
              <motion.img
                initial={{ y: -70, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()} //ImageUrlBuilder.url()
                alt=""
                className="h-30 md:h-40 rounded-lg"
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <a className=" hover:text-[#178fe6]" href={project.linkToBuild}>
                  {project.title}
                </a>
              </h4>

              <div className="flex items-center space-y-2 justify-center">
                {project?.technologies.map((tech) => (
                  <img
                    // className="w-10 h-10"
                    className="h-10 w-10 rounded-full ml-3 md:ml-10 mt-1"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#178fe6]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
