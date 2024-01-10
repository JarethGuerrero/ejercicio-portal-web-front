import { urlApi } from "./axios";

const getClientData = async () => {
    try {
        const response = await urlApi.get('/client')
        const data = response.data
        return data

    } catch (error) {
        console.error("Error getting data", error);
        return []
    }

}

export default getClientData