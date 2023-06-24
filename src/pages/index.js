import styles from '../styles/styles.module.css';
import { AboutCompany, Footer, Header, Hero, Navv, News, Partners, Products, Services } from '@/components';

export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={`containers`}>
					<Hero />
					<Navv />
					<Header />
				</div>
			</div>
			<div className={`containers`}>
				<Products />
			</div>
			<Services />
			<div className='containers'>
				<AboutCompany />
				<News />
				<Partners />
			</div>
			<Footer />
		</>
	);
}
