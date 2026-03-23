// Añadir bloques en base a su existencia.

import CallToAction from "../../components/Blocks/CallToAction.astro";
import Hero from "../../components/Blocks/Hero.astro";

const dinamicZoneName = import.meta.env.DYNAMIC_ZONE


export const populate = {
  // Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.
  [dinamicZoneName]: {
    on: {
      [`${dinamicZoneName}.hero`]: {
        populate: true
      },
      [`${dinamicZoneName}.call-to-action`]: {
        populate: true
      },
      // populate more components
    }
  },
  seo: {
    populate: {
      'openGraph': {
        populate: 'ogImage'
      },
    }
  }
}

export const listComponents: Record<string, any> = {
  // Crea la lista de componentes necesarios para renderizar en la Dynamic Zone
 [`${dinamicZoneName}.hero`]: Hero,
 [`${dinamicZoneName}.call-to-action`]: CallToAction,
 // add more components
};