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
			<div className={`${footer.container} flex justify-between ${footer.footer__container}`}>
				{/* 1 */}
				<div className={`${footer.footer__top} flex flex-col mr-3`}>
					{/* 1 */}
					<div className='flex'>
						<h2 className={`text-[#595959] md:mr-6 mr-3 md:text-[28px] sm:text-xl text-lg`}>Контакты</h2>
						<div>
							{/* 1.2 */}
							<div className='flex items-center justify-between mb-3'>
								{/* wrapper */}
								<div className='flex items-center justify-between'>
									{/* location */}
									<div className={`flex items-center mr-2`}>
										<div className='sm:flex hidden cursor-pointer w-[40px] h-[40px] rounded-full bg-white mr-2 justify-center items-center'>
											<Image src={location} alt='location' width={18} height={25} />
										</div>
										<p className={`text-xs text-[#5A5A5A]`}>г.Ташкент, Чиланзар 10 квартал, дом 3/1</p>
									</div>
									{/* Tell */}
									<div className={`flex items-center mr-2`}>
										<div className='sm:flex hidden cursor-pointer w-[40px] h-[40px] rounded-full bg-white mr-2 justify-center items-center'>
											<Image src={tell} alt='tell' width={18} height={25} />
										</div>
										<div className='flex flex-col whitespace-nowrap'>
											<Link href={'tel:+998 71 276-62-53'} target='_blank'>
												<p className={`text-xs text-[#5A5A5A] whitespace-nowrap`}>+998 71 276-62-53</p>
											</Link>
											<Link href={'tel:+998 71 276-62-54'} target='_blank'>
												<p className={`text-xs text-[#5A5A5A] whitespace-nowrap`}>+998 71 276-62-54</p>
											</Link>
										</div>
									</div>
								</div>
							</div>

							{/* 1.3 */}
							<div className='flex justify-between items-center mb-3'>
								{/* Email */}
								<div className={`flex items-center mr-2`}>
									<div className='cursor-pointer sm:flex hidden w-[40px] h-[40px] rounded-full bg-white mr-2 justify-center items-center'>
										<Image src={emailIcon} alt='tell' width={18} height={25} />
									</div>
									<div className='flex flex-col whitespace-nowrap'>
										<Link href={`tursunovdoniyorbek077@gmail.com`} target='_blank'>
											<p className={`text-xs text-[#5A5A5A] whitespace-nowrap`}>tursunovdoniyorbek077@gmail.com</p>
										</Link>
									</div>
								</div>
								<Link href={'#'} className={`${footer.footer__link} whitespace-nowrap`}>
									Оставить заявку
								</Link>
							</div>
						</div>
					</div>

					{/* 2 */}
					{/* logo & text */}
					<div className={`flex items-center justify-between ${footer.footer__icon}`}>
						<Link href={'#'} className='sm:mr-9 mr-0'>
							<Image src={logo} width={200} height={58} />
						</Link>
						<p className={`w-[442px] text-[#585858] md:text-lg sm:text-sm text-xs ${footer.footer__text}`}>
							Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных
							вопросов. Внедряя инновационные технологии на рынок Узбекистана.
						</p>
					</div>
				</div>

				{/* 3 */}
				{/* footer-right */}
				<div className={`flex`}>
					<div className='mr-5 flex flex-col'>
						<h2 className='text-[#595959] md:text-2xl sm:text-lg text-base font-medium'>О компании</h2>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							История
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Партнеры
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Вакансии
						</Link>
					</div>

					<div className='mr-5 flex flex-col'>
						<h2 className='text-[#595959] md:text-2xl sm:text-lg text-base font-medium'>Продукция</h2>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Эндоваскулярная хирургия
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Аритмология
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Кардиохирургия
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Лабораторная диагностика
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Хирургия
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Эндоурология
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Нейрохирургия
						</Link>
						<Link className='font-light text-base' href={'#'}>
							Анестезиология и реанимация
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Диабет
						</Link>
					</div>

					<div className='flex flex-col'>
						<h2 className='text-[#595959] md:text-2xl sm:text-lg text-base font-medium'>Услуги</h2>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Сервис
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Регистрации
						</Link>
						<Link className='font-light md:text-base sm:text-sm text-xs' href={'#'}>
							Услуги логистики
						</Link>
					</div>
				</div>
			</div>

			{/* 4 */}
			<div className={`${footer.container}`}>
				<div className={`${footer.container} ${footer.footer__bottom} flex justify-between items-center md:mt-11 mt-7 `}>
					<span className='text-[#353535] md:text-lg sm:text-base text-sm'>© 2021 ООО «Medical Online Services»</span>
					<div className='text-[#353535] md:text-lg sm:text-base text-sm'>
						Донийорбек:
						<Link
							className='text-[#00C9C9] md:text-lg sm:text-base text-sm'
							href={'tursunovdoniyorbek077@gmail.com'}
							target='_blank'>
							tursunovdoniyorbek077@gmail.com
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
