import type { Schema, Struct } from '@strapi/strapi';

export interface SeoDefaultSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_default_seos';
  info: {
    displayName: 'defaultSeo';
    icon: 'globe';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.default-seo': SeoDefaultSeo;
    }
  }
}
