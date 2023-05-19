import type { Service } from "./types";

import { loadLocaleData } from '~/app/shared/utilities'

export default async function getAllServices(): Promise<Service[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('loadLocaleData', loadLocaleData())
    if(!response.ok) throw new Error('failed to fetch data');

    return response.json();
}   


