import SinglePageData from '@/Companent/SinglePage/SinglePageData';
import React from 'react';

const SinglePage = ({params}) => {
const {id} = params;
console.log(id)

    return (
        <>
          <SinglePageData id={id}></SinglePageData>
        </>
    );
};

export default SinglePage;