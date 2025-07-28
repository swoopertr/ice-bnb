import homeData from "./homes";

const searchUtil={
    search : (searchText, pageNo=1)=>{
        
        //todo: get filtered data from backend api
        const result = homeData.filter(item => item.address.city.startsWith(searchText));
        
        return result;
    }
}

export default searchUtil;