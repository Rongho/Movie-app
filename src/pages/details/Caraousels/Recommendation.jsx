import React from "react";

import Carasoul from "../../../components/carasoul/Carasoul";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carasoul
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;