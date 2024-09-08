/**
 * loaded from .env
 * */

export const NODE_ENV = process.env.NODE_ENV as string

export const DOMAIN = (process.env.DOMAIN as string) || 'localhost:3000'
export const DOMAIN_URL = (process.env.DOMAIN_URL as string) || 'http://localhost:3000'

export const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION
export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION
export const FACEBOOK_VERIFICATION = process.env.FACEBOOK_VERIFICATION || ''
