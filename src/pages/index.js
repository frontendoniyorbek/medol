import { Badge, Button } from 'react-bootstrap';
import styles from '../styles/styles.module.css';
import { AboutCompany, Footer, Header, Hero, Navv, News, Partners, Products, Services } from '@/components';

export default function Home() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={`${styles.container}`}>
					<Hero />
					<Navv />
					<Header />
				</div>
			</div>
			<div className={`${styles.container}`}>
				<Products />
			</div>
			<Services />
			<AboutCompany />
			<News />
			<Partners />
			<Footer />
		</>
	);
}
