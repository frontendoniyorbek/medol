import aboutCompany from '../styles/styles.module.css';
import ellipse4 from '../images/ellipse4.png';
import ellipse5 from '../images/ellipse5.png';
import ellipse6 from '../images/ellipse6.png';
import logo from '../images/logo2.svg';
import Image from 'next/image';
import medoImage from '../images/medol-image.jpg';

const AboutCompany = () => {
	return (
		<div className={`${aboutCompany.aboutCompany} sm:pt-11 sm:pb-16 pt-10 pb-12 md:pt-[68px] md:pb-[108px]`}>
			<div className={`${aboutCompany.container}`}>
				<h2 className='text-[#0D4C93] font-medium md:text-[40px] sm:text-4xl text-3xl text-center'>О КОМПАНИИ</h2>
				<div className={`flex items-center md:mt-10 sm:mt-7 mt-5 ${aboutCompany.aboutCompany__wrapper}`}>
					<Image
						src={medoImage}
						width={'574px'}
						height={'574px'}
						className={`object-cover cursor-pointer ${aboutCompany.aboutCompany__images}`}
					/>
					<div>
						<div
							className={`${aboutCompany.aboutCompany__bg} md:pt-10 md:pb-7 md:pr-10  md:pl-10 sm:pt-7 sm:pl-7 sm:pr-7 sm:pb-7 pt-5 pr-5 pb-5 pl-5 mr-0`}>
							<div>
								<p className={`${aboutCompany.info}`}>
									Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и
									экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои
									представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
									Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и
									внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
								</p>
								<button className={`btn btn-services text-center`}>Узнать больше</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
