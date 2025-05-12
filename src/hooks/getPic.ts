import { ref, reactive } from "vue";
import axios from "axios";

export async function getPic() {
    const link = "https://www.pixiv.net/artworks/126452010";

    const response = await axios.get(link);


    console.log(response);


    const data = response.data;
    
    console.log(data)

}