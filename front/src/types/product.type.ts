import {PostType} from "App/types/post.type";

export interface Downloads {
}

export interface Dimensions {
    length: string;
    width: string;
    height: string;
}

export interface RelatedIds {
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    url: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
}

export interface Image {
    id: number;
    dateCreated: Date;
    dateCreatedGmt: Date;
    dateModified: Date;
    dateModifiedGmt: Date;
    src: string;
    name: string;
    alt: string;
}

export interface Attributes {
}

export interface DefaultAttributes {
}

export interface Variations {
}

export interface GroupedProducts {
}

export interface MetaData {
    id: number;
    key: string;
    value: string;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
}

export interface ProductType {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    dateCreated: Date;
    dateCreatedGmt: Date;
    dateModified: Date;
    dateModifiedGmt: Date;
    type: string;
    status: string;
    featured: boolean;
    catalogVisibility: string;
    description: string;
    shortDescription: string;
    sku: string;
    price: number;
    regularPrice: string;
    salePrice: string;
    dateOnSaleFrom?: Date;
    dateOnSaleFromGmt?: Date;
    dateOnSaleTo?: Date;
    dateOnSaleToGmt?: Date;
    priceHtml: string;
    onSale: boolean;
    purchasable: boolean;
    totalSales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: Downloads;
    downloadLimit: number;
    downloadExpiry: number;
    externalUrl: string;
    buttonText: string;
    taxStatus: string;
    taxClass: string;
    manageStock: boolean;
    stockQuantity?: number;
    stockStatus: string;
    backorders: string;
    backordersAllowed: boolean;
    backordered: boolean;
    soldIndividually: boolean;
    weight: string;
    dimensions: Dimensions;
    shippingRequired: boolean;
    shippingTaxable: boolean;
    shippingClass: string;
    shippingClassId: number;
    reviewsAllowed: boolean;
    averageRating: string;
    ratingCount: number;
    relatedIds: RelatedIds;
    upsellIds: number[];
    crossSellIds: number[];
    parentId: number;
    purchaseNote: string;
    categories: Category[];
    tags: Tag[];
    images: Image[];
    attributes: Attributes;
    defaultAttributes: DefaultAttributes;
    variations: Variations;
    groupedProducts: GroupedProducts;
    menuOrder: number;
    metaData: MetaData[];
    yoastHead: string;
    links: Links;
}

export interface ProductPost extends PostType {
    meta: {
        price: number;
        thumbnail: URL;
    }
}

