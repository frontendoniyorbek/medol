import Image from 'next/image';
import xirurgiya from '../images/xirurgiya.png';
import diagnostika from '../images/diagnostika.png';
import kar from '../images/kar.png';
import diabet from '../images/diabet.png';
import endourologiya from '../images/endourologiya.png';
import aritmologiya from '../images/aritmologiya.png';
import products from '../styles/styles.module.css';
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';

const Products = () => {
	return (
		<div className={`md:pt-[50px] md:pb-[67px] sm:pt-9 sm:pb-10 pt-6 pb-6 ${products.products__container}`}>
			<h2 className='text-[#0D4C93] text-center font-medium lg:text-[40px] md:text-4xl sm:text-3xl text-2xl lg:mb-[62px] md:mb-12 sm:mb-8 mb-6 leading-[1.2]'>
				ПРОДУКЦИЯ
			</h2>
			<ul className={`list-none first-letter flex items-center justify-between flex-wrap ${products.products__ul}`}>
				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={xirurgiya} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>Эндоваскулярная хирургия</h3>
					<button className='whitespace-nowrap btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={diagnostika} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>Эндоваскулярная хирургия</h3>
					<button className='whitespace-nowrap btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={kar} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>
						Кардиохирургия <span className={`${products.products__span}`}>Кардиохирургия</span>
					</h3>
					<button className='whitespace-nowrap btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={diabet} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>ДИАБЕТ</h3>
					<button className='whitespace-nowrap btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={endourologiya} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>ЭНДОУРОЛОГИЯ</h3>
					<button className='whitespace-nowrap btn btn__products btn__products--active'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 md:pt-[17px] md:pr-[72px] md:pb-[42px] md:pl-[72px] sm:pt-3 sm:pb-7 sm:pr-9 sm:pl-9 rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={aritmologiya} width={220} height={220} />
					<h3 className='text-center mt-0 md:mb-7 sm:mb-5 mb-4'>АРИТМОЛОГИЯ</h3>
					<button className='whitespace-nowrap btn btn__products'>Посмотреть все</button>
				</li>
			</ul>
			<div className='flex items-center cursor-pointer justify-center'>
				<Link className='text-[#0D4C93] mr-[6px]' href={'#'}>
					Перейти в каталог нашей продукции
				</Link>
				<AiOutlineRightCircle className='text-[#0D4C93] md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px]' />
			</div>
		</div>
	);
};

export default Products;
