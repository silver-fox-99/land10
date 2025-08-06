import { motion } from "framer-motion";
import icon1 from './icon1.svg'
import icon2 from './icon2.svg'
import icon3 from './icon3.svg'
import icon4 from './icon4.svg'
import './about.scss'

const wrapperVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
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
                    <h2 className="about__title title">About platform</h2>
                    <span className="about__subtitle">
            Long-term strategy, real assets, and<br/>
            transparent management for those<br/>
            who build, not guess
          </span>
                </motion.div>

                <motion.div className="about__column" variants={fadeUp}>
                    <h3 className="about__column-title">Everything you need to manage your capital is already here:</h3>
                    <div className="about__list">
                        {[icon1, icon2, icon3, icon4].map((icon, i) => (
                            <motion.div className="about__list-item" key={i} variants={fadeUp}>
                                <img src={icon} alt=""/>
                                <span>
                  {[
                      "Access to global instruments",
                      "Protection of funds",
                      "Flexible investment solutions",
                      "Full transparency and reporting"
                  ][i]}
                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="about__bottom-text" variants={fadeUp}>
                You choose: hold ETF positions, work with stocks and indices, enter the crypto market, or combine your portfolio. And we will help you build your route
            </motion.div>
        </motion.div>
    )
}
