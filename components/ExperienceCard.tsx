import React, { useRef, useState } from 'react'

import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
	// Scrollbar styling
	const [isScrolling, setIsScrolling] = useState(false)
	const scrollRef = useRef<HTMLDivElement>(null)
	const handleScroll = () => {
		if (!isScrolling) setIsScrolling(true)

		// Hide scrollbar after 1.5s of inactivity
		clearTimeout((scrollRef.current as any)?._scrollTimeout)
		;(scrollRef.current as any)._scrollTimeout = setTimeout(() => {
			setIsScrolling(false)
		}, 1500)
	}

	return (
		<article
			// className="w-32 h-32 rounded-full xl:w-[200px] xl:h=[200px] object-cover object-center"
			className="top-8 md:top-15 flex flex-col relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center snap-center"
		>
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
				className="w-24 h-24 md:w-32 md:h-32 rounded object-fill object-center mt-16"
				src={urlFor(experience.companyImage).url()} //ImageUrlBuilder.url()
				alt=""
			/>

			{/* Scrollable content wrapper */}
			<div className="px-0 md:px-10 space-y-2">
				{/* <div
				className="overflow-y-auto px-0 md:px-10 mt-5 max-h-[65vh] space-y-2
  scrollbar-thin scrollbar-track-gray-200/20 scrollbar-thumb-[#178fe6]/70 hover:scrollbar-thumb-[#178fe6] transition-all duration-200"
			> */}
				<h4 className="text-xl md:text-4xl font-light">
					{experience.jobTitle}
				</h4>
				<p className="font-bold text-2xl mt-1">{experience.company}</p>

				<div className="flex space-x-2 my-2 items-center justify-end md:justify-center">
					{experience.technologies.map((tech) => (
						<img
							key={tech._id}
							className="h-10 w-10 rounded-full"
							src={urlFor(tech.image).url()}
							alt={tech.title}
						/>
					))}
				</div>
				<p className="uppercase py-5 text-gray-300">
					{new Date(experience.dateStarted).toLocaleDateString('en-US', {
						month: 'short',
						year: 'numeric'
					})}{' '}
					-{' '}
					{experience.isCurrentlyWorkingHere
						? 'present'
						: new Date(experience.dateStarted).toLocaleDateString('en-US', {
								month: 'short',
								year: 'numeric'
						  })}
					{/* Start Date ... - End date ... */}
				</p>
				{/* Make points scrollable while keeping other elements fixed */}
				<div
					// className="px-0 md:px-10 space-y-2 overflow-y-auto max-h-[40vh] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]/80"
					// 				className="px-0 md:px-10 space-y-2 overflow-y-auto max-h-[40vh]
					// scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]/80
					// md:[&::-webkit-scrollbar-thumb]:transparent md:[&::-webkit-scrollbar-track]:transparent
					// md:hover:[&::-webkit-scrollbar-thumb]:[#178fe6]/80 md:hover:[&::-webkit-scrollbar-track]:gray-400/20
					// transition-all duration-300"
					// className="px-0 md:px-10 space-y-2 overflow-y-auto max-h-[40vh] custom-scroll"
					className={`px-0 md:px-10 space-y-2 overflow-y-auto max-h-[40vh] transition-all duration-300 ${
						isScrolling ? 'scrollbar-colored' : 'scrollbar-invisible'
					}`}
					onScroll={handleScroll}
					ref={scrollRef}
				>
					<ul className="list-disc space-y-4 ml-5 text-lg">
						{experience.points.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	)
}

export default ExperienceCard
