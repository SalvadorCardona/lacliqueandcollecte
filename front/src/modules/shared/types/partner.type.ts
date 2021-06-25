import {PostType} from "App/modules/shared/types/post.type";

export interface PartnerType {
    lastName: string;
    firstName: string;
    facePicture: URL;
    shopName: string;
    shopDescription: string;
    shopPicture: URL;
    email: string;
    phone: string;
    instagram: string;
    city: string;
    street: string;
    cityCode: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    tiktok: string;
}

export interface PartnerPost extends PostType {
    meta: PartnerType
}