import { reactive } from 'vue'
import axios from 'axios'

export function useDog(){
    let link = "https://dog.ceo/api/breeds/image/random"

    let dogList = reactive<string[]> ([
    ])

 
    async function getDog() {
    try {
        let response = await axios.get(link)
        dogList.push(response.data.message)

    }
    catch (error) {
        alert(error)
    }
    }
    return {dogList, getDog}
}