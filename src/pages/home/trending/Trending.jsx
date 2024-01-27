import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchtabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carasoul from '../../../components/carasoul/Carasoul';
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const {data,loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
};

  return (
<div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carasoul data={data?.results} loading={loading} />
        </div>
  )
}

export default Trending