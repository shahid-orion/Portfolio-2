import React from 'react'

import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
	experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="relative flex flex-col items-center px-4 md:px-10 mx-auto max-w-7xl"
			// viewport={{ once: true }}
			// className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
			// className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-12 md:top-16 xl:top-18 uppercase tracking-[12px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl">
				Experience
			</h3>

			<div
				className="w-full flex space-x-5 snap-x snap-mandatory 
    overflow-x-auto pb-10 scrollbar-thin 
    scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]/80"
				// className="w-full absolute flex space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6] justify-center"
				// className="w-full flex space-x-5 overflow-x-scroll p-10 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6] justify-center"
			>
				{experiences.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	)
}

export default WorkExperience
