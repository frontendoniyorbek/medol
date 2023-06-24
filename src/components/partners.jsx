import { categoryCarousel } from '@/config/constants';
import partners from '../styles/styles.module.css';
import asp from '../images/asp2.png';
import biosense from '../images/biosense.png';
import cordis from '../images/cordis.png';
import eth from '../images/eth.png';
import ethicon from '../images/ethicon.png';
import partners1 from '../images/partners1.png';
import partners3 from '../images/partners3.png';
import partners6 from '../images/partners6.png';
import Image from 'next/image';
import Carousel from 'better-react-carousel';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';

const Partners = () => {
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
		<div className='md:pb-32 sm:pb-24 pb-16'>
			<div className={`${partners.container}`}>
				<h2 className='text-[#0D4C93] text-center font-medium lg:text-[40px] md:text-3xl sm:text-2xl text-2xl lg:mb-[62px] md:mb-[68px] sm:mb-8 mb-6 leading-[1.2]'>
					ПАРТНЕРЫ
				</h2>

				<Carousel
					responsiveLayout={categoryCarousel}
					mobileBreakpoint={'767px'}
					cols={3}
					rows={1}
					gap={30}
					loop
					autoplay={2000}
					arrowRight={next}
					arrowLeft={prev}>
					<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
						<Image src={partners1} className='w-[172px] h-[126px] text-center' />
					</div>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={partners1} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={partners3} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={asp} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={biosense} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={cordis} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={partners6} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={eth} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={`${partners.partners__list} pt-2 md:pr-14 sm:pr-10 sm:pl-10 pl-8 pr-8 pb-2 md:pl-14`}>
							<Image src={ethicon} className='w-[172px] h-[126px] text-center' />
						</div>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};

export default Partners;
