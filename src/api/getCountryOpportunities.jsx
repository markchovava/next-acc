import { baseURL } from "./baseURL";



export async function getCountryOpportunities(slug) {
    const response = await fetch( `${baseURL}country-opportunity?slug=${slug}`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('Failed to fetch Data.')
    }
    return await response.json();
}


export async function getCountrySectorOpportunities(country_slug, sector_id) {
    const response = await fetch( `${baseURL}country-sector-country?country_slug=${country_slug}&sector_id=${sector_id}`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('Failed to fetch Data.')
    }

    return await response.json();
}