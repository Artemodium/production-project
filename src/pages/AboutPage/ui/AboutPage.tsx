import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t, i18n } = useTranslation('about');

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
