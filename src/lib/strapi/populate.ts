// Añadir bloques en base a su existencia.
// Esto popula zonas dinamicas de strapi, como los bloques de secciones, o el open graph de SEO.

export const populate = {
  blocks: {
    on: {
      'blocks.hero': {
        populate: true
      },
      // add more components
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