import React from 'react'
import { languages } from '../../i18n/ui'
import { useTranslatedPath } from '../../i18n/utils';

interface Props {
  locale: any;
}
export const LanguagePicker: React.FC<Props> = ({ locale }) => {
  const translatePath = useTranslatedPath(locale);

  return (
    <ul>
      {Object.entries(languages).map(([lang, label]) => (
        <li key={lang}>
          <a href={translatePath('/', lang)}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
