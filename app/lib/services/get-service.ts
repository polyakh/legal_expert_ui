import type { Service } from "./types";

export default async function getService(serviceId: string = '1'): Promise<Service> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${serviceId}`);

    if(!response.ok) throw new Error('failed to fetch data');

    return response.json();
}
