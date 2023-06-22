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
		<div className={`md:pt-[50px] md:pb-[67px] pt-9 pb-10 ${products.products__container}`}>
			<h2 className='text-[#0D4C93] text-center font-medium lg:text-[40px] md:text-4xl text-3xl lg:mb-[62px] md:mb-12 mb-8 leading-[1.2]'>
				ПРОДУКЦИЯ
			</h2>
			<ul className={`list-none first-letter flex items-center justify-between flex-wrap ${products.products__ul}`}>
				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={xirurgiya} width={220} height={220} />
					<h3 className='text-center mt-0 mb-7'>Эндоваскулярная хирургия</h3>
					<button className='btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={diagnostika} width={220} height={220} />
					<h3 className='text-center mt-0 mb-7'>Эндоваскулярная хирургия</h3>
					<button className='btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={kar} width={220} height={220} />
					<h3 className='text-center mt-0 mb-7'>Кардиохирургия Кардиохирургия</h3>
					<button className='btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={diabet} width={220} height={220} />
					<h3 className='text-center tracking-tighter-[0.1em] mt-0 mb-7'>ДИАБЕТ</h3>
					<button className=' btn btn__products'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={endourologiya} width={220} height={220} />
					<h3 className='text-center tracking-tighter-[0.1em] mt-0 mb-7'>ЭНДОУРОЛОГИЯ</h3>
					<button className=' btn btn__products btn__products--active'>Посмотреть все</button>
				</li>

				<li
					className={`flex flex-col items-center justify-center opacity-90 pt-[17px] pr-[72px] pb-[42px] pl-[72px] rounded-[35px] ${products.products__li}`}>
					<Image className={`mb-2 ${products.products__image}`} src={aritmologiya} width={220} height={220} />
					<h3 className='text-center tracking-tighter-[0.1em] mt-0 mb-7'>АРИТМОЛОГИЯ</h3>
					<button className=' btn btn__products'>Посмотреть все</button>
				</li>
			</ul>
			<div className='flex items-center cursor-pointer justify-center'>
				<Link className='text-[#0D4C93] mr-[6px]' href={'#'}>
					Перейти в каталог нашей продукции
				</Link>
				<AiOutlineRightCircle className='text-[#0D4C93] w-[30px] h-[30px]' />
			</div>
		</div>
	);
};

export default Products;
