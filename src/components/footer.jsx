import footer from '../styles/styles.module.css';
import location from '../images/location.svg';
import tell from '../images/tell.svg';
import emailIcon from '../images/email-icon.svg';
import logo from '../images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={`${footer.footer} md:pt-12 md:pb-7 pt-8 pb-5`}>
			<div className={`${footer.container} ${footer.footer__container} flex justify-between`}>
				<div className='mr-12'>
					<div className='flex items-center mb-7'>
						<h2 className='text-[#595959] md:mr-9 mr-5 text-[28px]'>Контакты</h2>
						<div className={`flex ${footer.footer__social}`}>
							<div className={`flex items-center mr-[41px] ${footer.footer__location}`}>
								<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white mr-5 flex justify-center items-center'>
									<Image src={location} alt='location' width={18} height={25} />
								</div>
								<p className={`text-xs text-[#5A5A5A]`}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
							</div>

							<div className={`flex items-center`}>
								<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white mr-5 flex justify-center items-center'>
									<Image src={tell} alt='tell' width={18} height={25} />
								</div>
								<p className={`text-xs text-[#5A5A5A] w-36`}>
									+998 71 276-62-53 <br /> +998 71 276-62-54
								</p>
							</div>
						</div>
					</div>

					<div className={`${footer.footer__button} flex items-center ml-[168px] mb-12`}>
						<div className={`flex items-center mr-16 ${footer.footer__email}`}>
							<div className='cursor-pointer w-[50px] h-[50px] rounded-full bg-white mr-5 flex justify-center items-center'>
								<Image src={emailIcon} alt='tell' width={18} height={25} />
							</div>
							<Link href={'#'} className={`text-xs text-[#5A5A5A] w-36`}>
								info@medol.uz
							</Link>
						</div>
						<Link className='btn btn__footer' href={'#'}>
							Оставить заявку
						</Link>
					</div>

					<div className='flex items-center mb-16'>
						<Link href={'#'} className='mr-9'>
							<Image className={`${footer.footer__logo}`} src={logo} width={200} height={58} />
						</Link>
						<p className='w-[442px] text-[#585858] text-lg'>
							Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных
							вопросов. Внедряя инновационные технологии на рынок Узбекистана.
						</p>
					</div>
				</div>

				<div className='mr-5 flex flex-col'>
					<h2 className='text-[#595959] text-2xl font-medium'>О компании </h2>
					<Link className='font-light text-base' href={'#'}>
						История
					</Link>
					<Link className='font-light text-base' href={'#'}>
						Партнеры
					</Link>
					<Link className='font-light text-base' href={'#'}>
						Вакансии
					</Link>
				</div>

				<div className={`${footer.footer__links} flex`}>
					<div className='mr-5 flex flex-col'>
						<h2 className='text-[#595959] text-2xl font-medium'>О компании </h2>
						<Link className='font-light text-base' href={'#'}>
							Эндоваскулярная хирургия
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Аритмология
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Кардиохирургия
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Лабораторная диагностика
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Хирургия
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Эндоурология
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Нейрохирургия
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Анестезиология и реанимация
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Диабет
						</Link>
					</div>

					<div className='flex flex-col'>
						<h2 className='text-[#595959] text-2xl font-medium'>Услуги</h2>
						<Link className='font-light text-base' href={'#'}>
							Сервис
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Регистрации
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Услуги логистики
						</Link>
					</div>
				</div>
			</div>
			<div className={`${footer.container} ${footer.footer__bottom} flex justify-between items-center`}>
				<span className='text-[#353535] text-lg'>© 2021 ООО «Medical Online Services»</span>
				<div className='text-[#353535] text-lg'>
					Дизайн сделан:
					<Link className='text-[#00C9C9]' href={'#'}>
						damingues92@gmail.com
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
