import Link from 'next/link';
import navbar from '../styles/styles.module.css';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../images/logo.svg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navv = () => {
	const [toggleNav, setToggleNav] = useState(true);

	const toggleHendler = () => setToggleNav(prev => !prev);
	return (
		<>
			<nav className={`opacity-90 bg-white mt-10 rounded-[35px] md:mb-[71px] mb-[36px] ${navbar.navbar}`}>
				<AnimatePresence>
					<motion.div onClick={toggleHendler} className='lg:hidden flex pt-3 pb-3'>
						{toggleNav ? <AiOutlineMenu className='w-16' /> : <AiOutlineCloseCircle className='w-16' />}
						{toggleNav ? (
							<ul className={`lg:flex hidden items-center justify-between list-none pt-3 pb-3`}>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										МАГАЗИН
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ОКОМПАНИИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ПРОДУКЦИЯ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										УСЛУГИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										АКЦИИ И НОВОСТИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ОБРАТНАЯ СВЯЗЬ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
							</ul>
						) : (
							<ul className={`lg:hidden flex flex-col mt-5 list-none pt-3 pb-3 ${navbar.ul}`}>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										МАГАЗИН
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ОКОМПАНИИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ПРОДУКЦИЯ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										УСЛУГИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										АКЦИИ И НОВОСТИ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
								<li className={navbar.navLi}>
									<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
										ОБРАТНАЯ СВЯЗЬ
									</Link>
									<span className={`${navbar.sircle}`}></span>
								</li>
							</ul>
						)}
					</motion.div>
				</AnimatePresence>
				<ul className={`lg:flex hidden items-center justify-between list-none pt-3 pb-3`}>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							МАГАЗИН
						</Link>
						<span className={`${navbar.sircle}`}></span>
					</li>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							ОКОМПАНИИ
						</Link>
						<span className={`${navbar.sircle}`}></span>
					</li>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							ПРОДУКЦИЯ
						</Link>
						<span className={`${navbar.sircle}`}></span>
					</li>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							УСЛУГИ
						</Link>
						<span className={`${navbar.sircle}`}></span>
					</li>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							АКЦИИ И НОВОСТИ
						</Link>
						<span className={`${navbar.sircle}`}></span>
					</li>
					<li className={navbar.navLi}>
						<Link className={`text-[#0D4C93] font-normal text-sm ${navbar.navbarLink}`} href={'#'}>
							ОБРАТНАЯ СВЯЗЬ
						</Link>
						<span className={`${navbar.sircle}`}></span>
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

export default Navv;
