import Image from 'next/image';
import masterKlass from '../images/master-klass.png';
import news from '../styles/styles.module.css';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import Carousel from 'better-react-carousel';

const responsive = [
	{
		breakpoint: 3000,
		cols: 3,
		rows: 1,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 1200,
		cols: 2,
		rows: 1,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 991,
		cols: 2,
		rows: 1,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
	{
		breakpoint: 767,
		cols: 1,
		rows: 1,
		gap: 10,
		loop: true,
		autoplay: 5000,
	},
];

const News = () => {
	const next = () => (
		<span className='next'>
			<i>
				<AiOutlineRight color='white' />
			</i>
		</span>
	);

	const prev = () => (
		<span className='prev'>
			<i>
				<AiOutlineLeft color='white' />
			</i>
		</span>
	);

	return (
		<div className={`md:pb-[104px] sm:pb-16 pb-10 ${news.news__container}`}>
			<h2 className='text-[#0D4C93] text-center font-medium lg:text-[40px] md:text-3xl sm:text-2xl text-2xl md:mb-14 sm:mb-12 mb-9 '>
				НОВОСТИ
			</h2>
			<Carousel
				responsiveLayout={responsive}
				mobileBreakpoint={'767px'}
				cols={3}
				rows={1}
				gap={30}
				loop
				autoplay={2000}
				arrowRight={next}
				arrowLeft={prev}
				className={`${news.carousel}`}>
				<Carousel.Item>
					<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-4 pl-2 md:pr-4 pr-2 md:mb-[45px] sm:mb-9 mb-6`}>
						<Image src={masterKlass} className={`${news.news__image}`} />
						<h3 className='text-center text-[#0D4C93] md:mb-[18px] sm:mb-4 mb-3 mt-1 font-medium text-xl'>
							Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
						</h3>
						<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
						<p className='text-sm text-center md:mb-[27px] sm:mb-6 mb-5'>
							С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
							при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
							мастер-класс в исполнении...
						</p>
						<button className={`btn btn-news text-center`}>Подробнее</button>
					</li>
				</Carousel.Item>

				<Carousel.Item>
					<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-4 pl-2 md:pr-4 pr-2 md:mb-[45px] sm:mb-9 mb-6`}>
						<Image src={masterKlass} className={`${news.news__image}`} />
						<h3 className='text-center text-[#0D4C93] md:mb-[18px] sm:mb-4 mb-3 mt-1 font-medium text-xl'>
							Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
						</h3>
						<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
						<p className='text-sm text-center md:mb-[27px] sm:mb-6 mb-5'>
							С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
							при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
							мастер-класс в исполнении...
						</p>
						<button className={`btn btn-news text-center`}>Подробнее</button>
					</li>
				</Carousel.Item>

				<Carousel.Item>
					<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-4 pl-2 md:pr-4 pr-2 md:mb-[45px] sm:mb-9 mb-6`}>
						<Image src={masterKlass} className={`${news.news__image}`} />
						<h3 className='text-center text-[#0D4C93] md:mb-[18px] sm:mb-4 mb-3 mt-1 font-medium text-xl'>
							Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
						</h3>
						<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
						<p className='text-sm text-center md:mb-[27px] sm:mb-6 mb-5'>
							С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
							при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
							мастер-класс в исполнении...
						</p>
						<button className={`btn btn-news text-center`}>Подробнее</button>
					</li>
				</Carousel.Item>
			</Carousel>
			<div
				className={`flex items-center cursor-pointer flex-wrap justify-between md:pl-28 sm:pl-20 md:pr-28 sm:mr-20 pl-11 pr-11 ${news.news__info}`}>
				<div className={`flex items-center mr-3 ${news.news__inner}`}>
					<Link className='text-[#0D4C93] md:text-2xl sm:text-lg text-sm mr-[6px]' href={'#'}>
						Перейти в каталог нашей продукции
					</Link>
					<AiOutlineRightCircle className='text-[#0D4C93] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
				</div>

				<div className='flex items-center'>
					<Link className='text-[#0D4C93] md:text-2xl sm:text-lg text-sm mr-[6px]' href={'#'}>
						Перейти в каталог нашей продукции
					</Link>
					<AiOutlineRightCircle className='text-[#0D4C93] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
				</div>
			</div>
		</div>
	);
};

export default News;
