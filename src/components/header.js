import Image from 'next/image';
import headerImage from '../images/header-images.png';
import header from '../styles/styles.module.css';

const Header = () => {
	return (
		<section className={`pb-[155px] lg:flex items-center justify-between ${header.headerWrapper}`}>
			<div className='max-w-[680px] w-full'>
				<h2 className='font-medium text-[50px] space-x-3 text-[#0d4c93] mb-8 mt-0'>
					Анализатор <br /> ABL800 FLEX
				</h2>
				<p className='mt-0 mb-11 text-[#363535]'>
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
