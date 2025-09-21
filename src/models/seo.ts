export interface ISeoModel {
    page: number
    content: {
        title: string
        h1: string
        keywords: string
        metaDescription: string
        canonicalLinks: string[]
        organizationSchema: string
        articleSchema: string
        ogTitle: string
        ogType: string
        ogurl: string
        ogImage: string
    }
}
