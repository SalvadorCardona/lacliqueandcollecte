export declare module CompleteProduct {

    export interface Downloads {
    }

    export interface Dimensions {
        length: string;
        width: string;
        height: string;
    }

    export interface RelatedIds {
        0: number;
    }

    export interface UpsellIds {
    }

    export interface CrossSellIds {
    }

    export interface Categories {
        id: number;
        name: string;
        slug: string;
    }

    export interface Tags {
    }


    export interface Images {
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

    export interface Collection {
        href: string;
    }

    export interface Links {
        href: string;
        collection: Collection;
    }

    export interface RootObject {
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
        price: string;
        regularPrice: string;
        salePrice: string;
        dateOnSaleFrom?: any;
        dateOnSaleFromGmt?: any;
        dateOnSaleTo?: any;
        dateOnSaleToGmt?: any;
        priceHtml: string;
        onSale: boolean;
        purchasable: boolean;
        totalSales: number;
        virtual: boolean;
        downloadable: boolean;
        downloads: Array<Downloads>;
        downloadLimit: number;
        downloadExpiry: number;
        externalUrl: string;
        buttonText: string;
        taxStatus: string;
        taxClass: string;
        manageStock: boolean;
        stockQuantity?: any;
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
        relatedIds: Array<RelatedIds>;
        upsellIds: Array<UpsellIds>;
        crossSellIds: Array<CrossSellIds>;
        parentId: number;
        purchaseNote: string;
        categories: Array<Categories>;
        tags: Array<Tags>;
        images: Array<Images>;
        attributes: Attributes;
        defaultAttributes: DefaultAttributes;
        variations: Variations;
        groupedProducts: GroupedProducts;
        menuOrder: number;
        metaData: Array<MetaData>;
        yoastHead: string;
        links: Array<Links>;
    }

}

