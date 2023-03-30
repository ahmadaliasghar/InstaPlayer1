import React, { Fragment } from 'react';
import { Locales } from './Locales';
import { IntlProvider } from 'react-intl';
import messages from './messages';

const Provider = ({children, locale = Locales.ENGLISH}) => (
    <IntlProvider
    locale={locale}
    textComponent = {Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);

export default Provider