import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import image from "./image.png";
import "./info-block-2.scss";

const wrapperVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.25, ease: [0.22, 1, 0.36, 1] }
    }
};

export default function InfoBlock2() {
    const { t } = useTranslation();

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
                    <Trans
                        i18nKey="info2.title"
                        components={[
                            <span key="s1" />,
                            <span key="s2" />,
                            <span key="s3" />,
                            <span key="s4" />
                        ]}
                    >
                        Choose <span>a plan</span>, <span>top up </span>your balance,
                        and <span>secure</span> your first assets <span>today</span>
                    </Trans>
                </h2>

                <motion.a
                    href={process.env.REACT_APP_LINK}
                    className="info-block-2__button button"
                    variants={fadeUp}
                    whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
                >
                    {t("info2.cta")}
                </motion.a>
            </motion.div>

            <motion.div className="info-block-2__column" variants={fadeUp}>
                <img src={image} alt="" />
            </motion.div>
        </motion.div>
    );
}
