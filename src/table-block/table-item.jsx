import { motion } from 'framer-motion';
import { Sparklines, SparklinesLine } from 'react-sparklines';


function TableItem({ name, icon, data, idx, sparklineData }) {
    return (
        <motion.div
            className='table__row'
            custom={idx}
            variants={{
                hidden: {opacity: 0, y: 28},
                visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {delay: i * 0.09, duration: 0.65, ease: "easeOut"}
                })
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.12}}
        >
            <div className='table__item' data-label='Markets'>
                <img src={icon} alt={name} style={{width: 30, height: 30}}/>
                {name}
            </div>
            <div className='table__item' data-label='Price'>
                {data ? `${data.price?.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })} USD` : 'Loading...'}
            </div>
            <div className='table__item' data-label='Change %'>
                <div className={`table__change ${data?.change > 0 ? 'positive' : 'negative'}`}>
                    {data ? `${data.change?.toFixed(2)}%` : 'Loading...'}
                </div>
            </div>
            <div className='table__item' data-label='Market cap'>
                {data ? `${(data.marketCap)?.toFixed(3)}T` : 'Loading...'}
            </div>
            <div className='table__item' data-label='Volume 24h'>
                {data ? `${(data.volume)?.toFixed(3)}B` : 'Loading...'}
            </div>
            <div className='table__item' data-label='Sparkline'>
                {sparklineData && sparklineData.length > 0 ? (
                    <Sparklines data={sparklineData} width={60} height={22}>
                        <SparklinesLine style={{strokeWidth: 1, fill: "none"}} cruve={true} color={data?.change > 0 ? "#16C784" : "#EA3943"}/>
                    </Sparklines>
                ) : (
                    <span style={{color: "#888", fontSize: 12}}>–</span>
                )}
            </div>
        </motion.div>
    );
}

export default TableItem;
