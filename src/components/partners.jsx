import { responsive } from '@/config/constants';
import partners from '../styles/styles.module.css';
import Carousel from 'react-multi-carousel';
import asp from '../images/asp2.png';
import biosense from '../images/biosense.png';
import cordis from '../images/cordis.png';
import eth from '../images/eth.png';
import ethicon from '../images/ethicon.png';
import partners1 from '../images/partners1.png';
import partners3 from '../images/partners3.png';
import partners6 from '../images/partners6.png';
import Image from 'next/image';

const Partners = () => {
	return (
		<div className='md:pb-32 pb-16'>
			<div className={`${partners.container}`}>
				<h2 className='text-center font-medium text-[40px] text-[#0D4C93] mb-[68px]'>ПАРТНЕРЫ</h2>

				<Carousel
					className='pt-14'
					responsive={responsive}
					autoPlay={true}
					autoPlaySpeed={1500}
					removeArrowOnDeviceType={['tablet', 'mobile']}
					infinite>
					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={partners1} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={asp} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={partners3} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={biosense} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={cordis} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={partners6} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={eth} className='w-[172px] h-[126px]' />
					</div>

					<div className={`${partners.partners__list} pt-2 pr-14 pb-2 pl-14`}>
						<Image src={ethicon} className='w-[172px] h-[126px]' />
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Partners;
