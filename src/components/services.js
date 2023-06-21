import Image from 'next/image';
import services from '../styles/styles.module.css';
import servisesServ from '../images/servises-serv.png';
import registration from '../images/registration.png';
import uslugi from '../images/uslugi.png';

const Services = () => {
	return (
		<>
			<h2 className='text-center font-medium text-[40px] text-[#0D4C93] mb-[68px]'>УСЛУГИ</h2>
			<div className={`${services.services} pt-[78px] pb-[112px]`}>
				<div className={`${services.container}`}>
					<ul className={`m-0 p-0 list-none flex flex-wrap items-center ${services.services__ul}`}>
						<li
							className={`w-[388px] bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} mb-9`} src={servisesServ} />
							<div className={`pl-10 pr-10 pb-[72px] ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl mb-4'>СЕРВИС ОБОРУДОВАНИЯ</h3>
								<p className='leading-6 text-base'>
									Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт
									и сертификаты фирм производителей......
								</p>
							</div>
							<button className={`btn btn-services text-center mb-[-20px]`}>Подробнее</button>
						</li>

						<li
							className={`w-[388px] bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} mb-9`} src={registration} />
							<div className={`pl-10 pr-10 pb-[72px] ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl mb-4'>РЕГИСТРАЦИИ</h3>
								<p className='leading-6 text-base'>
									Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского
									назначения Подготовка объектов к проведению ....
								</p>
							</div>
							<button className={`btn btn-services text-center mb-[-20px]`}>Подробнее</button>
						</li>

						<li
							className={`w-[388px] bg-white rounded-[50px] flex items-center justify-center flex-col ${services.services__li}`}>
							<Image className={`${services.services__image} mb-9`} src={uslugi} />
							<div className={`pl-10 pr-10 pb-[72px] ${services.services__info}`}>
								<h3 className='text-[#0D4C93] text-center text-xl mb-4'>УСЛУГИ ЛОГИСТИКИ</h3>
								<p className='leading-6 text-base'>
									Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт
									и сертификаты фирм производителей.....
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
