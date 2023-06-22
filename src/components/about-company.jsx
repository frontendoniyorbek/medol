import aboutCompany from '../styles/styles.module.css';
import ellipse4 from '../images/ellipse4.png';
import ellipse5 from '../images/ellipse5.png';
import ellipse6 from '../images/ellipse6.png';
import logo from '../images/logo2.svg';
import Image from 'next/image';

const AboutCompany = () => {
	return (
		<div className={`${aboutCompany.aboutCompany} pt-9 pb-16 md:pt-[68px] md:pb-[108px]`}>
			<div className={`${aboutCompany.container}`}>
				<h2 className='text-[#0D4C93] font-medium text-[40px] text-center'>О КОМПАНИИ</h2>
				<div className='relative'>
					<div>
						<Image className={`absolute top-0 left-0 ${aboutCompany.aboutCompany__ellipse4}`} src={ellipse4} />
						<Image className={`absolute top-[58px] left-[58px]  ${aboutCompany.aboutCompany__ellipse5}`} src={ellipse5} />
						<Image className={`absolute top-[111px] left-[111px]  ${aboutCompany.aboutCompany__ellipse6}`} src={ellipse6} />
						<Image className={`absolute top-[252px] left-[182px]  ${aboutCompany.aboutCompany__logo}`} src={logo} />
					</div>
					<div className='flex'>
						<div className={`${aboutCompany.aboutCompany__info} absolute top-[41px] left-[337px] -z-10`}></div>
						<div>
							<p className={`absolute top-[98px] left-[618px] text-xl font-light ${aboutCompany.aboutCompany__text}`}>
								Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики,
								за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства
								в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель
								компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых
								технологий в систему здравоохранения Республики Узбекистан.{' '}
							</p>
							<button className={`btn btn-services absolute top-[440px] left-[618px]`}>Подробнее</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
