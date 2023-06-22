import styles from '../styles/styles.module.css';
import { AboutCompany, Footer, Header, Hero, Navbar, News, Partners, Products, Services } from '@/components';

export default function Home() {
	return (
		<>
			{/* <div className={styles.wrapper}>
					<div className={styles.container}>
						<Hero />
						<Navbar />
						<Header />
					</div>
				</div> */}
			<div className={styles.container}>
				<Products />
			</div>
			{/* <Services />
				<AboutCompany />
				<News />
				<Partners />
				<Footer /> */}
		</>
	);
}
