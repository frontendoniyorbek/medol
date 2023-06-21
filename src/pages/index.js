import styles from '../styles/styles.module.css';
import { Header, Products, Services } from '@/components';

export default function Home() {
	return (
		<>
			<div>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						{/* <Hero />
					<Navbar /> */}
						<Header />
					</div>
				</div>
				<div className={styles.container}>
					<Products />
				</div>
				<Services />
			</div>
		</>
	);
}
