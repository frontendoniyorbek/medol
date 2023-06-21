import Image from 'next/image';
import location from '../images/location.svg';
import tell from '../images/tell.svg';
import logo from '../images/logo.svg';
import search from '../images/search.svg';
import facebook from '../images/facebook.svg';
import russ from '../images/russ.svg';
import acardion from '../images/acardion.svg';
import styleHero from '../styles/styles.module.css';

const Hero = () => {
	return (
		<div className='pt-[39px] pb-12 flex items-center justify-between'>
			<div className='flex items-center mr-[41px]'>
				<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white mr-5 flex justify-center items-center'>
					<Image src={location} alt='location' width={18} height={25} />
				</div>
				<p className={`text-xs text-[#5A5A5A]`}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
			</div>
			<div className='flex items-center mr-10'>
				<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white mr-5 flex justify-center items-center'>
					<Image src={tell} alt='tell' width={18} height={25} />
				</div>
				<p className={`text-xs text-[#5A5A5A] w-36`}>
					+998 71 276-62-53 <br /> +998 71 276-62-54
				</p>
			</div>
			<div className='ml-11 mr-32'>
				<Image src={logo} alt='logo' width={200} height={58} />
			</div>

			<div className='flex items-center ml-3 mr-14'>
				<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'>
					<Image src={search} alt='search' width={18} height={25} />
				</div>
			</div>

			<div className='flex items-center mr-12'>
				<div className='pt-[14px] pr-[19px] pb-[14px] pl-[15px] cursor-pointer rounded-[25px] bg-white mr-5 flex justify-center items-center'>
					<Image className='mr-4' src={facebook} alt='facebook' width={12} height={22} />
					<p className='text-[#0D4C93] text-xs text-center leading-[1.2]'>Мы на Facebook</p>
				</div>
			</div>

			<div className='flex items-center'>
				<div className='pt-[14px] pr-[19px] pb-[14px] pl-[15px]  cursor-pointer rounded-[25px] bg-white mr-5 flex justify-center items-center'>
					<Image className='mr-4' src={russ} alt='russ' width={31} height={31} />
					<p className='text-[#0D4C93] text-xs mr-3 text-center leading-[1.2]'>Русский</p>
					<Image src={acardion} alt='acardion' width={11} height={6} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
