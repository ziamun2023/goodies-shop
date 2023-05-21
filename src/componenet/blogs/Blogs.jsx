import React from 'react';

const Blogs = () => {
    return (
        <div>
              <h1 className="text-5xl font-bold text-center">Add New Toy!</h1>
              <p className='font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
       
              <p className='font-normal'>
              refresh token are used in authentication and authorization. It is for secure access into the resources. It is use for storing  client information or user information which is  authenticated and authorized. it is short time and it has timeout limit.
              </p>  <p className='font-bold'>Compare SQL and NoSQL databases?</p>
       
              <p className='font-normal'>
              SQL has a rigid, predefined schema that organizes data into tables and it also have fixed columns and relationships defined by foreign keys. The data is based on  relational model.SQL databases use SQL language for manipulating data.SQL databases are used used in applications that need complex queries. NoSQL databases is schema-less data model.in the nosql Data is stored in various formats like key-value pairs, documents and graphs. NoSQL databases  have their own query languages for query and manipulating. no SQL is used for real-time data processing, caching, logging, and high quality systems like social networks, IoT platforms, and content delivery networks.
              </p>
                


              <p className=''>

              Express.js is a web application framework for Node.js, it provides a simple  system to building web applications and API. It is said that it is fast, unopinionated, and minimalist framework because it provides a lightweight foundation for developing web applications without imposing too many constraints.
               NestJS is a  Node.js framework for building scalable and efficient server-side applications. It is made  with TypeScript and  inspired by Angular's architecture and concepts. NestJS includes Express.js, to create a powerful  platform for building server-side applications.


              </p>

              <p className='font-bold'>What is MongoDB aggregate and how does it work (google it)?</p>
              <p>
              MongoDB's aggregate is a powerful method  for data  analysis in MongoDB. It allows us to perform advanced data processing operations, such as filtering, grouping, sorting, joining, and calculating aggregate values. MongoDB consists of stages that process documents sequentially, transforming the data based on the defined operations and returning the aggregate results. It can be used for free and helps to maintain huge amout of data for website 
              </p>
            
        </div>
    );
};

export default Blogs;