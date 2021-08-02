import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ResultList from '../component/ResultList';
import SearchBar from '../component/SearchBar';
import { fetchSearch,fetchdefault } from '../services'; 
import '../App.css';

function MainPage() {
    const [searchText, setSearchText] = useState("man");
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);


    const searchImage = async (searchText) => {
        const data = await fetchSearch(searchText);
        setSearchText(searchText);
        setContent(data);
    }

    const loadMore = async () => {
        setPage(page+1);
        const data = await fetchSearch(searchText, page);
        setContent([...content, ...data]);
    }

    useEffect(() => {
        searchImage(searchText);
    }, [searchText])

    return (
        <div> 
        <SearchBar onSearch={searchImage}/>
        <InfiniteScroll
          dataLength={content.length}
          next={loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <ResultList items={content}/>
        </InfiniteScroll>
           
        </div>
    )
}

export default MainPage;
