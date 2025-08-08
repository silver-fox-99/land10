import { motion } from "framer-motion";
import image from './image.png'
import './info-block-2.scss'

const wrapperVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25, // Плавная и долгая анимация!
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function InfoBlock2() {
    return (
        <motion.div
            className="info-block-2 container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={wrapperVariants}
        >
            <motion.div className="info-block-2__column" variants={fadeUp}>
                <h2 className="info-block-2__title title">
                    <span>Choose</span> a plan, <span>top up </span>your balance,
                    and <span>secure</span> your first assets <span>today</span>
                </h2>
                <motion.a
                    href={process.env.REACT_APP_LINK}
                    className="info-block-2__button button"
                    variants={fadeUp}
                    whileHover={{
                        scale: 1.06,
                        transition: { duration: 0.3 }
                    }}
                >
                    Start investing
                </motion.a>
            </motion.div>

            <motion.div className="info-block-2__column" variants={fadeUp}>
                <img src={image} alt=""/>
            </motion.div>
        </motion.div>
    );
}
