import React from 'react';
import TableComponent from './table';
import { useTranslation } from 'react-i18next';
import './table-block.scss';

const TableBlock = () => {
    const { t } = useTranslation();

    return (
        <div id="trade_view" className="table-block container">
            <h2 data-aos="fade-right" className="table-block__title title">
                {t('table.title')}
            </h2>
            <TableComponent />
        </div>
    );
};

export default TableBlock;
