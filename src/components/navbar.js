import Link from 'next/link';
import navbar from '../styles/styles.module.css';

const Navbar = () => {
	return (
		<>
			<Carousel responsive={responsive} showDots={false}>
				<nav className='lg:block sm:hidden opacity-90 bg-white rounded-[35px] mb-[71px] pt-6 pr-8 pb-6 pl-12'>
					<ul className='flex items-center justify-between list-none'>
						<li className={navbar.navLi}>
							<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
								МАГАЗИН
							</Link>
						</li>
						<li className={navbar.navLi}>
							<Link className='text-[#0D4C93] font-normal text-xl' href={'#'}>
								О КОМПАНИИ
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
			</Carousel>
		</>
	);
};

export default Navbar;
