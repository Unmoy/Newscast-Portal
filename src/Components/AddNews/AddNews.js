import React from "react";
import { useState } from "react";
import "./AddNews.css";
const AddNews = () => {
  const [news, setNews] = useState({});
  const [file, setFile] = useState(null);
  //   console.log(news);
  //   console.log(file);
  const handleBlur = (e) => {
    const newsData = { ...news };
    newsData[e.target.name] = e.target.value;
    setNews(newsData);
  };

  const handleChange = (e) => {
    const newsImage = e.target.files[0];
    setFile(newsImage);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", news.title);
    formData.append("description", news.description);
    formData.append("category", news.category.toLowerCase());
    formData.append("author", news.author);

    fetch("https://safe-atoll-13917.herokuapp.com/addnews", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("News added Succesfully");
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="news_form">
      <h1>Add News</h1>
      <form className="editor_wrapper" onSubmit={handleSubmit}>
        <label className="form-label">News heading:</label>
        <input
          onBlur={handleBlur}
          className="form-control editor_box "
          type="text"
          name="title"
          placeholder="news title"
        />
        <label className="form-label">News description:</label>
        <input
          onBlur={handleBlur}
          className="form-control editor_box"
          type="text"
          name="description"
          placeholder="news description"
        />
        <label className="form-label">News Category:</label>
        <input
          onBlur={handleBlur}
          className="form-control editor_box"
          type="text"
          name="category"
          placeholder="Please turn off capslock"
        />
        <label className="form-label">News Author:</label>
        <input
          onBlur={handleBlur}
          className="form-control editor_box"
          type="text"
          name="author"
          placeholder="news author"
        />
        <label className="form-label">News Image:</label>
        <input
          onChange={handleChange}
          className="form-control editor_box"
          name="file"
          id="formFileSm"
          type="file"
        />
        <button type="submit" className="btn btn-warning w-100">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddNews;
