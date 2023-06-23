import '@/styles/globals.css';
import 'react-multi-carousel/lib/styles.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 15 }}
				transition={{ delay: 0.5 }}>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}
