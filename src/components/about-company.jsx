import aboutCompany from '../styles/styles.module.css';
import ellipse4 from '../images/ellipse4.png';
import ellipse5 from '../images/ellipse5.png';
import ellipse6 from '../images/ellipse6.png';
import logo from '../images/logo2.svg';
import Image from 'next/image';
import medoImage from '../images/medol-image.jpg';

const AboutCompany = () => {
	return (
		<div className={`${aboutCompany.aboutCompany} pt-9 pb-16 md:pt-[68px] md:pb-[108px]`}>
			<div className={`${aboutCompany.container}`}>
				<h2 className='text-[#0D4C93] font-medium text-[40px] text-center'>О КОМПАНИИ</h2>
				<div className={`flex items-center ${aboutCompany.aboutCompany__wrapper}`}>
					<Image
						src={medoImage}
						width={'574px'}
						height={'574px'}
						className={`object-cover cursor-pointer ${aboutCompany.aboutCompany__images}`}
					/>
					<div>
						<div className={`${aboutCompany.aboutCompany__bg} md:pt-14 md:pb-2 md:pr-10 md:pl-10 pt-5 pl-5 pr-5 pb-5`}>
							<div>
								<p className={`${aboutCompany.info}`}>
									Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и
									экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои
									представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
									Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и
									внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
								</p>
								<button className={`btn btn-services text-center mb-[-20px]`}>Узнать больше</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCompany;
