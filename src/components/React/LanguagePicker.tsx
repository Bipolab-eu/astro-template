import React, { useState } from 'react'
import { languages } from '../../i18n/ui'
import { useTranslatedPath } from '../../i18n/utils';
import { Languages } from 'lucide-react';

interface Props {
  locale: any;
}
export const LanguagePicker: React.FC<Props> = ({ locale }) => {
  const translatePath = useTranslatedPath(locale);
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
         <ul className='absolute'>
        {Object.entries(languages).map(([lang, label]) => (
          <li key={lang}>
            <a href={translatePath('/', lang)}>{label}</a>
          </li>
        ))}
      </ul>
      )}

    </div>
  )
}
