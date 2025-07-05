import React from 'react'

import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
	socials: Social[]
}

const Header = ({ socials }: Props) => {
	const getPlatformColor = (url: string) => {
		const platformColors: Record<string, string> = {
			linkedin: '#0A66C2', // LinkedIn blue
			github: '#181717', // GitHub black
			instagram: '#E4405F', // Instagram pink
			twitter: '#1DA1F2', // Twitter blue
			facebook: '#1877F2', // Facebook blue
			youtube: '#FF0000', // YouTube red
			email: '#6B7280', // Neutral gray for email
			default: '#f7faf9' // Your original fallback
		}

		const platform = url.includes('linkedin.com')
			? 'linkedin'
			: url.includes('github.com')
			? 'github'
			: url.includes('instagram.com')
			? 'instagram'
			: url.includes('twitter.com')
			? 'twitter'
			: url.includes('facebook.com')
			? 'facebook'
			: url.includes('youtube.com')
			? 'youtube'
			: url.startsWith('mailto:')
			? 'email'
			: 'default'

		return platformColors[platform]
	}
	// console.log(socials)
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5
				}}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				{/* {social icons} */}
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor={getPlatformColor(social.url)} // Dynamic color
						// fgColor="#f7faf9"
						// fgColor="gray"
						bgColor="transparent"
					/>
				))}
			</motion.div>

			{/* <Link href="#contact"> */}
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-[#f7faf9] cursor-pointer mr-2"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					// fgColor="#f7faf9"
					fgColor="#178fe6"
					bgColor="transparent"
				/>
				<a href="#contact" className="text-[#f7faf9]">
					Get in touch
				</a>
				{/* <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get in touch
        </p> */}
			</motion.div>
			{/* </Link> */}
		</header>
	)
}

export default Header
