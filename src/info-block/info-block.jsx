import { motion } from "framer-motion";
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import icon5 from './icon5.png'
import icon6 from './icon6.png'
import './info-block.scss'

const wrapperVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.22 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function InfoBlock() {
    return (
        <motion.div
            className="info-block container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={wrapperVariants}
        >
            <motion.h2 className="info-block__title title" variants={itemVariants}>
                What you get:
            </motion.h2>

            <motion.div className="info-block__list" variants={wrapperVariants}>
                {[ // массив данных, чтобы не дублировать разметку!
                    {
                        title: "Access to global markets: US, Europe, Asia",
                        text: "Invest in the world's largest economies without unnecessary restrictions and barriers",
                        icon: icon1
                    },
                    {
                        title: "Personal account with checkpoints and timeline",
                        text: "Track your progress, see how your capital is performing, and make decisions on an easy-to-understand dashboard",
                        icon: icon2
                    },
                    {
                        title: "Investment plan taking into account horizon and risks",
                        text: "We don't guess, we plan. Get a strategy tailored to your goals and risk level",
                        icon: icon3
                    },
                    {
                        title: "Portfolio customization for your goals",
                        text: "Whether it's retirement, a home, or passive income, we'll advise you on how to allocate your capital",
                        icon: icon4
                    },
                    {
                        title: "Notifications, forecasts, and analytics from ",
                        text: "Stay up to date: market analytics, entry points, and news you won't miss a thing",
                        icon: icon5
                    },
                    {
                        title: "Stocks, bonds, ETFs, cryptocurrencies",
                        text: "Build a balanced portfolio of traditional and digital assets under a single strategy",
                        icon: icon6
                    }
                ].map((item, i) => (
                    <motion.div
                        className="info-block__item"
                        variants={itemVariants}
                        key={i}
                    >
                        <h4 className="info-block__item-title">{item.title}</h4>
                        <span className="info-block__item-text">{item.text}</span>
                        <img src={item.icon} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
