import Link from 'next/link';
import navbar from '../styles/styles.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../images/logo.svg';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(true);

	const toggleHendler = () => setToggleNav(prev => !prev);
	return (
		<>
			<nav className={`relative opacity-90 bg-white rounded-[35px] md:mb-[71px] mb-[36px] pt-6 pr-8 pb-6 pl-12 ${navbar.navbar}`}>
				<ul className='flex items-center justify-between list-none'>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-xl ${navbar.navbarLink}`} href={'#'}>
							МАГАЗИН
						</Link>
					</li>
					<li className={navbar.navLi}>
						<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
							ОКОМПАНИИ
						</Link>
					</li>
					<li className={navbar.navLi}>
						<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
							ПРОДУКЦИЯ
						</Link>
					</li>
					<li className={navbar.navLi}>
						<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
							УСЛУГИ
						</Link>
					</li>
					<li className={navbar.navLi}>
						<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
							АКЦИИ И НОВОСТИ
						</Link>
					</li>
					<li className={navbar.navLi}>
						<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
							ОБРАТНАЯ СВЯЗЬ
						</Link>
					</li>
				</ul>
			</nav>

			{/* NAVBAR */}
			<div className={`${navbar.sidebar} bg-white mt-28 hidden rounded-[20px]`}>
				<div>
					{toggleNav ? (
						<div className={`${navbar.block}`}></div>
					) : (
						<div className={`${navbar.sidebar__nav} pt-4 pb-4 pl-5 pr-5`}>
							<div className='flex items-center justify-between'>
								<Link className={`text-[#0D4C93] font-normal text-sm  mb-4`} href={'#'}>
									МАГАЗИН
								</Link>
								<Link className='text-[#0D4C93] font-normal text-sm mb-4' href={'#'}>
									ОКОМПАНИИ
								</Link>
								<Link className='text-[#0D4C93] font-normal text-sm mb-4' href={'#'}>
									ПРОДУКЦИЯ
								</Link>
							</div>
							<div className='flex items-center justify-between'>
								<Link className='text-[#0D4C93] font-normal text-sm' href={'#'}>
									УСЛУГИ
								</Link>
								<Link className='text-[#0D4C93] font-normal text-sm' href={'#'}>
									АКЦИИ И НОВОСТИ
								</Link>
								<Link className='text-[#0D4C93] font-normal text-sm' href={'#'}>
									ОБРАТНАЯ СВЯЗЬ
								</Link>
							</div>
						</div>
					)}
				</div>

				<div className='absolute right-0 top-9	 pl-5 pr-5'>
					<div>
						<div onClick={toggleHendler}>
							{toggleNav ? (
								<AiOutlineMenu className='text-[#0D4C93] cursor-pointer w-[30px] h-[30px] object-contain' />
							) : (
								<AiOutlineCloseCircle className='text-[#0D4C93] cursor-pointer w-[30px] h-[30px] object-contain' />
							)}
						</div>
					</div>
				</div>
				<div className='absolute left-0 top-7 pl-5 pr-5'>
					<Image className='cursor-pointer' src={logo} alt='logo' width={200} height={58} />
				</div>
			</div>
		</>
	);
};

export default Navbar;
