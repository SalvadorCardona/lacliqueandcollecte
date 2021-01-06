
export interface Coupons {
}

export interface Destination {
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
}

export interface Item {
    key: string;
    name: string;
    quantity: number;
}

export interface ShippingRates {
}

export interface ShippingRate {
    packageId: number;
    name: string;
    destination: Destination;
    items: Item[];
    shippingRates: ShippingRates;
}

export interface ShippingAddress {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
}

export interface Image {
    id: number;
    src: string;
    thumbnail: string;
    srcset: string;
    sizes: string;
    name: string;
    alt: string;
}

export interface Variation {
}

export interface RawPrices {
    precision: number;
    price: string;
    regularPrice: string;
    salePrice: string;
}

export interface Prices {
    currencyCode: string;
    currencySymbol: string;
    currencyMinorUnit: number;
    currencyDecimalSeparator: string;
    currencyThousandSeparator: string;
    currencyPrefix: string;
    currencySuffix: string;
    price: string;
    regularPrice: string;
    salePrice: string;
    priceRange?: any;
    rawPrices: RawPrices;
}

export interface Totals {
    currencyCode: string;
    currencySymbol: string;
    currencyMinorUnit: number;
    currencyDecimalSeparator: string;
    currencyThousandSeparator: string;
    currencyPrefix: string;
    currencySuffix: string;
    lineSubtotal: string;
    lineSubtotalTax: string;
    lineTotal: string;
    lineTotalTax: string;
}

export interface ProductCart {
    key: string;
    id: number;
    quantity: number;
    quantityLimit: number;
    name: string;
    shortDescription: string;
    description: string;
    sku: string;
    lowStockRemaining?: any;
    backordersAllowed: boolean;
    showBackorderBadge: boolean;
    soldIndividually: boolean;
    permalink: string;
    images: Image[];
    variation: Variation;
    prices: Prices;
    totals: Totals;
}

export interface TaxLines {
}

export interface TotalCart {
    currencyCode: string;
    currencySymbol: string;
    currencyMinorUnit: number;
    currencyDecimalSeparator: string;
    currencyThousandSeparator: string;
    currencyPrefix: string;
    currencySuffix: string;
    totalItems: string;
    totalItemsTax: string;
    totalFees: string;
    totalFeesTax: string;
    totalDiscount: string;
    totalDiscountTax: string;
    totalShipping: string;
    totalShippingTax: string;
    totalPrice: string;
    totalTax: string;
    taxLines: TaxLines;
}

export interface Errors {
}

export interface CartType {
    coupons: Coupons;
    shippingRates: ShippingRate[];
    shippingAddress: ShippingAddress;
    items: ProductCart[];
    itemsCount: number;
    itemsWeight: number;
    needsPayment: boolean;
    needsShipping: boolean;
    totals: TotalCart;
    errors: Errors;
}


