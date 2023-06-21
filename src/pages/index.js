import Header from '@/components/header';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import styles from '../styles/styles.module.css';

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Hero />
				<Navbar />
				<Header />
			</div>
		</div>
	);
}
