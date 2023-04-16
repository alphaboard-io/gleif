const BASE_URL: string = 'https://api.gleif.org/api/v1';

export type leiRecord = {
    lei: string;
    name: string;
    attributes: any;
    relationships: any;
}

export type gleifResult = {
    ok: boolean;
    record: leiRecord | undefined;
    error? : string;
}

export async function isin(isin: string): Promise<gleifResult> {
    let result: gleifResult = { ok: false, record: undefined };
    const url = BASE_URL.concat('/lei-records');
    const params = '?filter[isin]='.concat(isin);

    try {
        const response = await fetch(url + params);
        if (response.ok) {
            const content = await response.json();
            if (content && Array.isArray(content.data) && content.data.length > 0) {
                const record = content.data[0];
                result.ok = true;
                result.record = {
                    lei: record.id,
                    name: record.attributes.entity.legalName.name,
                    attributes: record.attributes,
                    relationships: record.relationships
                }

            } else {
                result.error = `${isin} not found.`;
            }
        }

    } catch(err: any) {
        result.error = err.message;
    }
    console.log(result);
    return result;
}
