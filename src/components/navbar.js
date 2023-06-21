import Link from 'next/link';
import navbar from '../styles/styles.module.css';

const Navbar = () => {
	return (
		<nav className='opacity-90 bg-white rounded-[35px] mb-[71px] pt-6 pr-8 pb-6 pl-12'>
			<ul className='flex items-center justify-center list-none'>
				<li className={navbar.navLi}>
					<Link href={'#'}>МАГАЗИН</Link>
				</li>
				<li className={navbar.navLi}>
					<Link href={'#'}>О КОМПАНИИ</Link>
				</li>
				<li className={navbar.navLi}>
					<Link href={'#'}>ПРОДУКЦИЯ</Link>
				</li>
				<li className={navbar.navLi}>
					<Link href={'#'}>УСЛУГИ</Link>
				</li>
				<li className={navbar.navLi}>
					<Link href={'#'}>АКЦИИ И НОВОСТИ</Link>
				</li>
				<li className={navbar.navLi}>
					<Link href={'#'}>ОБРАТНАЯ СВЯЗЬ</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
