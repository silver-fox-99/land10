import { motion } from "framer-motion";
import './main-block.scss';

const wrapperVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function MainBlock() {
    return (
        <motion.div
            className="main-block"
            initial="hidden"
            animate="visible"
            variants={wrapperVariants}
        >
            <motion.div className="main-block__wrapper container" variants={wrapperVariants}>
                <motion.h1 className="main-block__title title" variants={itemVariants}>
                    Investments focused
                    on <span>stability </span> and <span>growth</span>
                </motion.h1>
                <motion.span className="main-block__text" variants={itemVariants}>
                    Long-term strategy, real assets, and transparent management for those who build, not guess
                </motion.span>
                <motion.a
                    href="#"
                    className="main-block__button button"
                    variants={itemVariants}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Start investing
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
