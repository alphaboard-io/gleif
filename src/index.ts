const BASE_URL: string = 'https://api.gleif.org/api/v1';

export type leiRecord = {
    lei: string;
    name: string;
    attributes: any;
    relationships: any;
};

export async function isin(isin: string): Promise<leiRecord> {
    const url = BASE_URL.concat('/lei-records');
    const params = '?filter[isin]='.concat(isin);

    const response = await fetch(url + params);
    if (response.ok) {
        const content = await response.json();
        if (content && Array.isArray(content.data) && content.data.length > 0) {
            const record = content.data[0];
            return {
                lei: record.id,
                name: record.attributes.entity.legalName.name,
                attributes: record.attributes,
                relationships: record.relationships,
            };
        } else throw new Error(`${isin} not found.`);
    } else throw new Error('Invalid response: ' + response.statusText);
}
