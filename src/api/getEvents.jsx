import { baseURL } from "./baseURL";


export async function getEvents() {
    const response = await fetch( `${baseURL}event`, {cache: 'no-cache'} );
    if(!response.ok) {
       throw new Error('Failed to fetch Data.')
    }

    return await response.json();
}