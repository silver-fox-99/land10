import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { TbWorld } from 'react-icons/tb';
import i18n from "i18next";


export const LanguageSwitcher = () => {
    const [lang, setLang] = React.useState(
        (i18n.language || 'en').startsWith('ru') ? 'ru' : 'en'
    );

    const handleChange = (_e, value) => {
        if (!value) return;
        setLang(value);
        i18n.changeLanguage(value);
        try { localStorage.setItem('lang', value); } catch {}
    };

    return (
        <ToggleButtonGroup
            size="small"
            value={lang}
            exclusive
            onChange={handleChange}
            aria-label="language switcher"
            sx={{
                ml: 2,
                // белая рамка/иконки
                border: '1px solid rgba(255,255,255,.4)',
                borderRadius: '999px',
                backdropFilter: 'blur(4px)',
                '& .MuiToggleButton-root': {
                    color: '#fff',
                    border: 'none',
                    px: 1.4,
                    minWidth: 22,
                    textTransform: 'uppercase',
                    letterSpacing: .3,
                    '& svg': { marginRight: 1, fontSize: 18 },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,.12)',
                    },
                    '&.Mui-selected': {
                        color: '#111',
                        backgroundColor: '#fff',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,.9)' },
                    },
                },
                // убираем внутренние разделители
                '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
                    marginLeft: 0,
                },
            }}
        >
            <ToggleButton value="en" aria-label="English">
                <TbWorld /> EN
            </ToggleButton>
            <ToggleButton value="ru" aria-label="Русский">
                RU
            </ToggleButton>
        </ToggleButtonGroup>
    );
};
