import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type Props = {
	projects: Project[]
}

function Projects({ projects }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollToProject = (index: number) => {
		const container = scrollRef.current
		if (container) {
			const project = container.children[index] as HTMLElement
			project.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center'
			})
			setCurrentIndex(index)
		}
	}

	const handleNext = () => {
		const nextIndex = (currentIndex + 1) % projects.length
		scrollToProject(nextIndex)
	}

	const handlePrev = () => {
		const prevIndex = (currentIndex - 1 + projects.length) % projects.length
		scrollToProject(prevIndex)
	}

	// Scrollbar style
	const [isScrolling, setIsScrolling] = useState(false)
	const summaryScrollRef = useRef<HTMLDivElement>(null)

	const handleScroll = () => {
		if (!isScrolling) setIsScrolling(true)

		clearTimeout((summaryScrollRef.current as any)?._scrollTimeout)
		;(summaryScrollRef.current as any)._scrollTimeout = setTimeout(() => {
			setIsScrolling(false)
		}, 1500)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full 
      h-screen justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>

			{/* Navigation Arrows */}
			<button
				onClick={handlePrev}
				className="hidden md:block absolute left-10 z-30 p-2 rounded-full bg-[#178fe6]/30 hover:bg-[#178fe6]/50 transition-all"
				aria-label="Previous project"
			>
				<FiChevronLeft className="h-6 w-6 text-[#178fe6]" />
			</button>

			<button
				onClick={handleNext}
				className="hidden md:block absolute right-10 z-30 p-2 rounded-full bg-[#178fe6]/30 hover:bg-[#178fe6]/50 transition-all"
				aria-label="Next project"
			>
				<FiChevronRight className="h-6 w-6 text-[#178fe6]" />
			</button>

			{/* Projects */}
			<div
				className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]/80"
				ref={scrollRef}
			>
				{projects.map((project, i) => (
					<motion.div
						key={project._id}
						className="w-screen flex flex-col space-y-5 items-center justify-center 
            flex-shrink-0 snap-center p-5 md:p-36 h-screen"
					>
						<Link key={project._id} href={project.linkToBuild} target="_blank">
							<motion.img
								initial={{
									y: -300
								}}
								transition={{ duration: 1.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								src={urlFor(project?.image).url()}
								className="md:mb-0 flex-shrink-0 w-full max-w-3xl rounded-xl md:rounded-2xl 
           shadow-2xl shadow-[#178fe6]/20 border-4 border-white/10 
           hover:shadow-[#178fe6]/40 hover:scale-[1.02] transition-all 
           duration-300 cursor-pointer bg-gray-900/5 backdrop-blur-sm
           object-cover md:h-[25vh] lg:h-[35vh]"
							/>
						</Link>

						<div className="space-y-2 md:space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-2xl md:text-4xl font-semibold text-center">
								<span className="decoration-[#178fe6]/50 underline text-[#178fe6]">
									Project {i + 1} of {projects.length}:
								</span>{' '}
								{project.title}
							</h4>

							{/* SCROLLABLE SUMMARY */}
							<div
								ref={summaryScrollRef}
								onScroll={handleScroll}
								className={`max-h-[180px] overflow-y-auto md:max-h-none md:overflow-visible px-2 md:px-0 text-lg md:text-2xl text-center md:text-left transition-all duration-300 ${
									isScrolling ? 'scrollbar-colored' : 'scrollbar-invisible'
								}`}
								// className="max-h-[180px] overflow-y-auto md:max-h-none md:overflow-visible px-2 md:px-0 text-lg md:text-2xl text-center md:text-left scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#178fe6]"
							>
								{project.summary}
							</div>

							{/* <p className="text-lg md:text-2xl text-center md:text-left">
								{project.summary}
							</p> */}
						</div>
					</motion.div>
				))}
			</div>

			{/* Dot Indicators */}
			<div className="absolute bottom-10 flex space-x-2 z-30">
				{projects.map((_, i) => (
					<button
						key={`dot-${i}`}
						onClick={() => scrollToProject(i)}
						className={`h-3 w-3 rounded-full transition-all ${
							i === currentIndex ? 'bg-[#178fe6]' : 'bg-gray-500/50'
						}`}
						aria-label={`Go to project ${i + 1}`}
					/>
				))}
			</div>

			<div
				className="w-full absolute top-[30%] bg-[#178fe6]/10 left-0 h-[500px] 
      -skew-y-12"
			/>
		</motion.div>
	)
}

export default Projects
