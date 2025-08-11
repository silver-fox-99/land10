import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import icon4 from './icon4.svg';
import './about.scss';

const wrapperVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
    const { t } = useTranslation();
    const features = t('about.features', { returnObjects: true });

    return (
        <motion.div
            className="about"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={wrapperVariants}
        >
            <motion.div className="about__wrapper" variants={wrapperVariants}>
                <motion.div className="about__column" variants={fadeUp}>
                    <h2 className="about__title title">{t('about.title')}</h2>

                    <span className="about__subtitle">
            <Trans i18nKey="about.subtitle" components={[<br key="b1" />, <br key="b2" />]}>
              Long-term strategy, real assets,<br />
              transparent management for those<br />
              who build, not guess
            </Trans>
          </span>
                </motion.div>

                <motion.div className="about__column" variants={fadeUp}>
                    <h3 className="about__column-title">{t('about.columnTitle')}</h3>

                    <div className="about__list">
                        {[icon1, icon2, icon3, icon4].map((icon, i) => (
                            <motion.div className="about__list-item" key={i} variants={fadeUp}>
                                <img src={icon} alt="" />
                                <span>{features?.[i]}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="about__bottom-text" variants={fadeUp}>
                {t('about.bottom')}
            </motion.div>
        </motion.div>
    );
}
