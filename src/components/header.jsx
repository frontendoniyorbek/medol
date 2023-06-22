import Image from 'next/image';
import headerImage from '../images/header-images.png';
import header from '../styles/styles.module.css';

const Header = () => {
	return (
		<section className={`md:pb-[155px] pb-20 lg:flex items-center justify-between ${header.headerWrapper}`}>
			<div
				className={`max-w-[680px] w-full flex flex-col md:justify-start justify-center md:items-start items-center ${header.header__info}`}>
				<h2 className='md:font-medium md:text-[50px] md:text-start text-center text-4xl md:space-x-3 text-[#0d4c93] md:mb-8 mb-5 mt-0'>
					Анализатор <br /> ABL800 FLEX
				</h2>
				<p className='mt-0 md:mb-11 mb-7 text-[#363535] md:text-start text-center'>
					Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор
					параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
				</p>
				<button className='btn'>Подробнее</button>
			</div>
			<Image className={header.image} src={headerImage} alt='headerImage' width={724} height={545} />
		</section>
	);
};

export default Header;
