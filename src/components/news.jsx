import { categoryCarousel } from '@/config/constants';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import masterKlass from '../images/master-klass.png';
import news from '../styles/styles.module.css';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

const News = () => {
	return (
		<div className={`md:pb-[104px] pb-20 ${news.container}`}>
			<h2 className='text-[#0D4C93] font-medium text-[40px] text-center'>НОВОСТИ</h2>
			<Carousel
				className='pt-14'
				responsive={categoryCarousel}
				autoPlay={true}
				autoPlaySpeed={1500}
				removeArrowOnDeviceType={['tablet', 'mobile']}
				infinite>
				<li className={`${news.news__li} mt-[136px] pl-7 pr-7 mb-[45px]`}>
					<Image src={masterKlass} className={`${news.news__image}`} />
					<h3 className='text-center text-[#0D4C93] mb-[18px] mt-1 font-medium text-xl'>
						Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
					</h3>
					<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
					<p className='text-sm text-center mb-[27px]'>
						С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
						при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
						мастер-класс в исполнении...
					</p>
					<button className={`btn btn-news text-center`}>Подробнее</button>
				</li>

				<li className={`${news.news__li} mt-[136px] pl-7 pr-7 mb-[45px]`}>
					<Image src={masterKlass} className={`${news.news__image}`} />
					<h3 className='text-center text-[#0D4C93] mb-[18px] mt-1 font-medium text-xl'>
						Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
					</h3>
					<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
					<p className='text-sm text-center mb-[27px]'>
						С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
						при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
						мастер-класс в исполнении...
					</p>
					<button className={`btn btn-news text-center`}>Подробнее</button>
				</li>

				<li className={`${news.news__li} mt-[136px] pl-7 pr-7 mb-[45px]`}>
					<Image src={masterKlass} className={`${news.news__image}`} />
					<h3 className='text-center text-[#0D4C93] mb-[18px] mt-1 font-medium text-xl'>
						Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
					</h3>
					<h4 className='text-center text-[#0D4C93] font-medium text-lg mb-3'>26.07.2021</h4>
					<p className='text-sm text-center mb-[27px]'>
						С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии)
						при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен
						мастер-класс в исполнении...
					</p>
					<button className={`btn btn-news text-center`}>Подробнее</button>
				</li>
			</Carousel>
			<div className={`flex items-center cursor-pointer flex-wrap justify-between pl-28 pr-28 ${news.news__info}`}>
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
