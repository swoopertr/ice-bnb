import homeData from "./homes";

const searchUtil = {
    search: (searchText, pageNo = 0) => {

        const result = homeData.filter(item => item.address.city.startsWith(searchText));
        const result_obj = {
            data: result.slice(pageNo * 9, (pageNo + 1) * 9),
            totalCount: result.length,
            pageCount: Math.ceil(result.length / 9)
        };

        return result_obj;
    }
}

export default searchUtil;