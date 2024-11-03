import axios from "axios"
import { getBlogApiURL } from "../../utils/constants"

export const getBlogsData = async () => {
    try {
        const response = await axios.get(getBlogApiURL);
        const formattedData = response.data.map(article => ({
            id: article.id,
            blogsBanner: article.cover_image,
            publicReactionsCount: article.public_reactions_count,
            badge: article.tag_list,
            redirectTo: [
                {
                    url: article.url,
                    icon: "globe",
                },
            ],
            url: article.url,
            blogsName: article.title,
            blogPublish: article.readable_publish_date,
            blogsDetails: article.description,
        }));
        return formattedData;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        throw error; // Rethrow the error for further handling if needed
    }
};



