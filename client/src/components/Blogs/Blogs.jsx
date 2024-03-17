import React from 'react'
import { useState, useEffect } from 'react';
import './blogs.css'
import axios from 'axios'

function Card({ tag, title, message }) {

  return (
    <div className="card-container">
      <div className="card-image">
        <img src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="card-body">
        <span className="card-badge card-badge-blue">{tag}</span>
        <h1>
          {title}
        </h1>
        <p class="card-subtitle">
          {message}
        </p>
      </div>
    </div>
  )
}


function Blogs() {


  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get('/api/blog')
    .then((response) => {
      setBlogData(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])


  return (
    <div id="blog-wraper">
      <div id="blog">
        <div className="blog-heading">
          <h1>Get Some Tips And Tricks</h1>
        </div>
        <div className="blog-container">

          {
            blogData.map((blog) => (
              <Card key={index} tag={blog.tag} title={blog.title} message={blog.message} />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Blogs