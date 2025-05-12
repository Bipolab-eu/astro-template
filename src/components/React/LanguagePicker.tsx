import React, { useState } from 'react'
import { languages } from '../../i18n/ui'
import { getRouteFromUrl, useTranslatedPath } from '../../i18n/utils';
import { Languages } from 'lucide-react';

interface Props {
  locale: any;
  route: any
}
export const LanguagePicker: React.FC<Props> = ({ locale, route }) => {
  const translatePath = useTranslatedPath(locale);

  // console.log('route', route)
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='relative'>
      {/* Botón para abrir/cerrar el dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center"
        aria-expanded={open}
        aria-label="Cambiar idioma"
      >
        <Languages color="#0A0A0A" />
      </button>
      {/* Dropdown */}
      {open && (
        <ul className='absolute right-0'>
          {Object.entries(languages).map(([lang, label]) => (
            <li key={lang}>
              <a href={translatePath(`/${route ? route : ''}`, lang)}>{label}</a>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}
