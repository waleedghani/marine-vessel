import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useGetPagesQuery } from '../../RTK/service';

const DynamicPage = ({ initialTitle, initialDescription }) => {
    const { data, error, isLoading } = useGetPagesQuery();
    const meta = data?.response?.data[4];
    console.log(meta,"datadatadata")
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    // Simulating an asynchronous data fetching operation
    setTimeout(() => {
      // Example: fetching updated title and description from an API or other source
      const updatedTitle = meta?.meta_title ? meta?.meta_title : 'Home';
      const updatedDescription = meta?.meta_description ?meta?.meta_description : 'description';

      setTitle(updatedTitle);
      setDescription(updatedDescription);
    }, 2000); // Simulating a delay of 2 seconds for demonstration purposes

    // You can add more asynchronous operations here if needed

  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </Helmet>
     
      </div>
    </HelmetProvider>
  );
};

export default DynamicPage;
