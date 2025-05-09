import React from 'react'
import { LanguagePicker } from './LanguagePicker';

interface Props {
  locale: any;
}

export const Navbar: React.FC<Props> = ({ locale }) => {
  return (
    <nav>
      <LanguagePicker locale={locale} />
    </nav>
  )
}
