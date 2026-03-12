// Notar: 
// Añadir bloques en base a su existencia.
// Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.

export const populate = {
  sections: {
    on: {
      'sections.hero': {
        populate: true
      },
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