import axios from "axios";

export const getPlacesData = async (type) => {
    try {
        const { 
            data: { data }
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: '25.15543993776612',
                tr_latitude: '25.41257834546226',
                bl_longitude: '51.39587210719369',
                tr_longitude: '51.62812119686502',
                restaurant_tagcategory_standalone: '10591',
                restaurant_tagcategory: '10591',
                limit: '30',
                currency: 'USD',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Key': 'c5ede92fd1mshefbb1331da6c605p1aa7ffjsn6a74050ed97a',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
        });

        return data;
    } catch (error) {
        return null;
    }
};