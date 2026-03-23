import Hero from "../../components/Blocks/Hero.astro";

const dinamicZoneName = import.meta.env.DYNAMIC_ZONE

export const populate = {
  // Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.
  [dinamicZoneName]: {
    on: {
      [`${dinamicZoneName}.hero`]: {
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
 // add more components
};