import Image from 'next/image';
import services from '../styles/styles.module.css';
import servisesServ from '../images/servises-serv.png';
import registration from '../images/registration.png';
import uslugi from '../images/uslugi.png';

const Services = () => {
	return (
		<>
			<h2 className='text-center font-medium md:text-[40px] text-3xl text-[#0D4C93] md:mb-[68px] mb-10'>УСЛУГИ</h2>
			<div className={`${services.services} md:pt-[78px] md:pb-[112px] sm:pt-14 sm:pb-20 pt-12 pb-14`}>
				<div className={`${services.services__container}`}>
					<ul className={`m-0 p-0 list-none flex flex-wrap justify-between items-center ${services.services__ul}`}>
						<li className={`bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} md:mb-9 sm:mb-6 mb-5`} src={servisesServ} />
							<div
								className={`md:pl-10 md:pr-10 md:pb-[72px] sm:pl-8 sm:pr-8 sm:pb-14 pl-5 pr-5 pb-10 ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl md:mb-4 mb-3'>СЕРВИС ОБОРУДОВАНИЯ</h3>
								<p className='leading-6 text-base'>
									Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт
									и сертификаты фирм производителей......
								</p>
							</div>
							<button className={`btn btn-services text-center mb-[-20px]`}>Подробнее</button>
						</li>

						<li
							className={`w-[388px] bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} md:mb-9 sm:mb-6 mb-5`} src={registration} />
							<div
								className={`md:pl-10 md:pr-10 md:pb-[72px] sm:pl-8 sm:pr-8 sm:pb-14 pl-5 pr-5 pb-10  ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl md:mb-4 mb-3'>РЕГИСТРАЦИИ СТРАЦИИ</h3>
								<p className='leading-6 text-base'>
									Обеспечение предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется
									опыт и сертификаты фирм производителей......
								</p>
							</div>
							<button className={`btn btn-services text-center mb-[-20px]`}>Подробнее</button>
						</li>

						<li
							className={`w-[388px] bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} md:mb-9 sm:mb-6 mb-5`} src={uslugi} />
							<div
								className={`md:pl-10 md:pr-10 md:pb-[72px] sm:pl-8 sm:pr-8 sm:pb-14 pl-5 pr-5 pb-10  ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl md:mb-4 mb-3'>УСЛУГИ ЛОГИСТИКИ</h3>
								<p className='leading-6 text-base'>
									Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт
									и сертификаты фирм производителей......
								</p>
							</div>
							<button className={`btn btn-services text-center mb-[-20px]`}>Подробнее</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Services;
