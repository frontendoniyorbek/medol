import aboutCompany from '../styles/styles.module.css';
import logo from '../images/logo2.svg';
import Image from 'next/image';
import medoImage from '../images/medol-image.jpg';
import Link from 'next/link';

const AboutCompany = () => {
	return (
		<div className={`${aboutCompany.aboutCompany} sm:pt-11 sm:pb-16 pt-10 pb-12 md:pt-[68px] md:pb-[108px]`}>
			<div className={`${aboutCompany.container}`}>
				<h2 className='text-[#0D4C93] font-medium md:text-[40px] sm:text-4xl text-3xl text-center'>О КОМПАНИИ</h2>
				<div className={`flex items-center md:mt-10 sm:mt-7 mt-5}`}>
					{/* ${aboutCompany.aboutCompany__wrapper */}
					<div className={` ${aboutCompany.card}`}>
						<div className={`${aboutCompany.card__left}`}>
							<div className={`${aboutCompany.card__first}`}>
								<div className={`${aboutCompany.card__second}`}>
									<div className={`${aboutCompany.card__third}`}>
										<Image className={`${aboutCompany.card__logo}`} src={logo} />
									</div>
								</div>
							</div>
						</div>

						<div className={`${aboutCompany.card__right}`}>
							<div className={`${aboutCompany.card__rightInner}`}>
								<p className='text-xs  xl:text-base xl:mb-4 mb-6 font-light tracking-[1.2px] '>
									Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и
									экономики,
									<span className='lg:flex hidden'>
										за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои
										представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical
										Online Services". Цель
									</span>
									<span className='sm:flex hidden'>
										компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения
										передовых технологий в систему здравоохранения
									</span>{' '}
									Республики Узбекистан.
								</p>
								<Link className='btn btn__company mt-4 whitespace-nowrap' href={'#'}>
									Узнать больше
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
