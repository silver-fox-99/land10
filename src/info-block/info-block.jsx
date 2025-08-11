import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';
import './info-block.scss';

const wrapperVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.22 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
};

export default function InfoBlock() {
    const { t } = useTranslation();
    const items = t('info.items', { returnObjects: true }); // [{title, text}, ...]

    const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

    return (
        <motion.div
            className="info-block container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={wrapperVariants}
        >
            <motion.h2 className="info-block__title title" variants={itemVariants}>
                {t('info.title')}
            </motion.h2>

            <motion.div className="info-block__list" variants={wrapperVariants}>
                {(items || []).map((item, i) => (
                    <motion.div className="info-block__item" variants={itemVariants} key={i}>
                        <h4 className="info-block__item-title">{item.title}</h4>
                        <span className="info-block__item-text">{item.text}</span>
                        <img src={icons[i]} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
