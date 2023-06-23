import Image from 'next/image';
import location from '../images/location.svg';
import tell from '../images/tell.svg';
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import facebook from '../images/facebook.svg';
import russ from '../images/russ.svg';
import acardion from '../images/acardion.svg';
import styleHero from '../styles/styles.module.css';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import uzb from '../images/UZ.svg';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className={`md:pt-[39px] pt-5 md:pb-12 pb-6 flex items-center justify-between`}>
			{/* location */}
			<div className={`lg:flex hidden items-center mr-2`}>
				<div className='cursor-pointer w-[40px] h-[40px] rounded-full bg-white mr-2 flex justify-center items-center'>
					<Image src={location} alt='location' width={18} height={25} />
				</div>
				<p className={`text-xs text-[#5A5A5A]`}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
			</div>

			{/* Tell */}
			<div className={`lg:flex hidden items-center mr-2`}>
				<div className='cursor-pointer w-[40px] h-[40px] rounded-full bg-white mr-2 flex justify-center items-center'>
					<Image src={tell} alt='tell' width={18} height={25} />
				</div>
				<div className='flex flex-col whitespace-nowrap'>
					<Link href={'tel:+998 71 276-62-53'} target='_blank'>
						<p className={`text-xs text-[#5A5A5A] whitespace-nowrap`}>+998 71 276-62-53</p>
					</Link>
					<Link href={'tel:+998 71 276-62-54'} target='_blank'>
						<p className={`text-xs text-[#5A5A5A] whitespace-nowrap`}>+998 71 276-62-54</p>
					</Link>
				</div>
			</div>

			{/* icon */}
			<div className={`lg:mr-4 lg:ml-4 ml-0 text-center whitespace-nowrap`}>
				<Image className={`whitespace-nowrap ${styleHero.heoIcon}`} src={logo} alt='logo' width={200} height={58} />
			</div>

			{/* search */}
			<div className={`flex items-center ml-2 mr-4`}>
				<div className='cursor-pointer md:w-[40px] md:h-[40px] w-8 h-8 rounded-full bg-white flex justify-center items-center'>
					<Image className={`${styleHero.search}`} src={search} alt='search' width={18} height={25} />
				</div>
			</div>

			{/* facebook */}
			<div className={`flex items-center md:mr-2 mr-2`}>
				<Link
					href={'https://www.facebook.com/profile.php?id=100074194453706'}
					target='_blank'
					className='pt-2 md:pr-6 pb-2  md:pl-6 pr-4 pl-4 cursor-pointer rounded-[25px] bg-white flex justify-center items-center'>
					<Image className='sm:mr-2 mr-0' src={facebook} alt='facebook' width={12} height={22} />
					<p className='text-[#0D4C93] sm:flex hidden whitespace-nowrap text-xs text-center leading-[1.2]'>Мы на Facebook</p>
				</Link>
			</div>

			{/* lenguach */}
			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<Box>
						<AccordionButton className='pt-2 pb-2 pr-4 pl-4  cursor-pointer rounded-[25px] bg-white'>
							<Box as='span' flex='1' textAlign='center' className='flex justify-center items-center'>
								<Image className={`md:mr-4 mr-2 ${styleHero.languach}`} src={russ} alt='russ' width={31} height={31} />
								<p className='text-[#0D4C93] text-xs md:mr-3 sm:flex hidden mr-2 text-center leading-[1.2]'>Русский</p>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</Box>
					<AccordionPanel className='fixed w-40 sm:flex-col flex-wrap flex  pt-2  pb-2  cursor-pointer'>
						<div className='flex items-center mb-2'>
							<Image className='mr-4' src={russ} alt='russ' width={25} height={25} />
							<p className='text-[#0D4C93] text-xs sm:flex hidden mr-3 text-center leading-[1.2]'>Русский</p>
						</div>
						<div className='flex items-center'>
							<Image className='mr-4 rounded-full' src={uzb} alt='russ' width={25} height={25} />
							<p className='text-[#0D4C93] text-xs mr-3 sm:flex hidden text-center leading-[1.2]'>Узбекистан</p>
						</div>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Hero;
