import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
	pageInfo: PageInfo[]
}

const Hero = ({ pageInfo }: Props) => {
	const [text, count] = useTypewriter({
		// words: ['Hi, I am Shahid', 'Enjoy-Coffee.tsx', '<LoveToCode/>'],
		words: [
			`Hi, I am ${pageInfo[0]?.name}`,
			'Enjoy-Coffee.tsx',
			'<LoveToCode/>'
		],
		loop: true,
		delaySpeed: 2000
	})

	// console.log('page INFO', pageInfo.name)

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<div className="relative rounded-full h-40 w-40 mx-auto overflow-hidden">
				<img
					className="h-full w-full object-cover object-top" // Focus on center
					src={urlFor(pageInfo[0]?.heroImage).url()}
					alt="Shahid"
				/>
			</div>
			{/* <img
				className="relative rounded-full h-40 w-40 mx-auto object-cover"
				src={urlFor(pageInfo[0]?.heroImage).url()} //ImageUrlBuilder.url()
				alt="Shahid"
			/> */}
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{/* Software Developer */}
					{pageInfo[0]?.role}
				</h2>
				<h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB8A" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
