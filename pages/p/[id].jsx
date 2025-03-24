import React from 'react';

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ locale, params }) => {
    return {
        props: {
          id: params.id,
        },
      }
};

const Page = React.memo(({ id }) => {
    return <div>Welcome to Page: {id}</div>
})

export default Page