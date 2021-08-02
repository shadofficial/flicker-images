export const fetchSearch = async (searchText, pageNum=1, perPageItem=10) => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1583ada955f818856c5692be7cb57c4e&text=${searchText}&page=${pageNum}per_page=${perPageItem}&format=json&nojsoncallback=1`);
    const json = await response.json();
    const data = await json.photos;
    return data.photo;
};
const fetchdefault = async (page=1) => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=1583ada955f818856c5692be7cb57c4e&per_page=12&page=${page}&format=json&nojsoncallback=1`);
    const json = await response.json();
    const data = await json.photos;
    return data.photo;
};

