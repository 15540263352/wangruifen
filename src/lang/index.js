import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import cnLang from './entries/zh-CN';

const AppLocale = {
    en: enLang,
    es: esLang,
    zh: cnLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.zh.data);

export default AppLocale;
