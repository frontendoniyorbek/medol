import { categoryCarousel } from '@/config/constants';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import masterKlass from '../images/master-klass.png';
import news from '../styles/styles.module.css';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

const News = () => {
	return (
		<div className={`md:pb-[104px] sm:pb-20 pb-14 ${news.news__container}`}>
			<h2 className='text-[#0D4C93] font-medium md:text-[40px] sm:text-3xl text-3xl text-center'>НОВОСТИ</h2>
			<Carousel
				className='md:pt-14 sm:pt-12 pt-9 flex justify-between items-center'
				responsive={categoryCarousel}
				autoPlay={true}
				autoPlaySpeed={1500}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				infinite>
				<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-7 ml-5 md:pr-7 mr-5 md:mb-[45px] sm:mb-9 mb-6`}>
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

				<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-7 ml-5 md:pr-7 mr-5 md:mb-[45px] sm:mb-9 mb-6`}>
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

				<li className={`${news.news__li} md:mt-[136px] sm:mt-24 mt-16 md:pl-7 ml-5 md:pr-7 mr-5 md:mb-[45px] sm:mb-9 mb-6`}>
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
			</Carousel>
			<div
				className={`flex items-center cursor-pointer flex-wrap justify-between md:pl-28 sm:pl-20 md:pr-28 sm:mr-20 pl-11 pr-11 ${news.news__info}`}>
				<div className={`flex items-center mr-3 ${news.news__inner}`}>
					<Link className='text-[#0D4C93] mr-[6px]' href={'#'}>
						Перейти в каталог нашей продукции
					</Link>
					<AiOutlineRightCircle className='text-[#0D4C93] w-[30px] h-[30px]' />
				</div>

				<div className='flex items-center'>
					<Link className='text-[#0D4C93] mr-[6px]' href={'#'}>
						Перейти в каталог нашей продукции
					</Link>
					<AiOutlineRightCircle className='text-[#0D4C93] w-[30px] h-[30px]' />
				</div>
			</div>
		</div>
	);
};

export default News;
