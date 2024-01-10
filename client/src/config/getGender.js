import { urlApi } from "./axios";

const getGender = async () => {
    try {
        const response = await urlApi.get('/gender')
        const data = response.data
        return data

    } catch (error) {
        console.error("Error getting data", error);
        return []
    }

}

export default getGender