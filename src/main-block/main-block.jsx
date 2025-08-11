import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import './main-block.scss';

const wrapperVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function MainBlock() {
    const { t } = useTranslation();

    return (
        <motion.div className="main-block" initial="hidden" animate="visible" variants={wrapperVariants}>
            <motion.div className="main-block__wrapper container" variants={wrapperVariants}>
                <motion.h1 className="main-block__title title" variants={itemVariants}>
                    <Trans
                        i18nKey="main.title"
                        components={[<span key="s1" />, <span key="s2" />]}
                    >
                        {/* fallback на случай, если i18n не инициализирован */}
                        Investments focused on <span>stability</span> and <span>growth</span>
                    </Trans>
                </motion.h1>

                <motion.span className="main-block__text" variants={itemVariants}>
                    {t('main.subtitle')}
                </motion.span>

                <motion.a
                    href={process.env.REACT_APP_LINK}
                    className="main-block__button button"
                    variants={itemVariants}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                >
                    {t('main.cta')}
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
