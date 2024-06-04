import React, { useState, useEffect } from "react";
import { Card, Typography, TextField, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BlogCard } from "../../components/BlogCard";
import { BlogSearchBar } from "../../components/common/BlogSearchBar";

export const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [showPostForm, setShowPostForm] = useState(true);
  const userData = JSON.parse(localStorage.getItem("profile"));
  const currentId = userData.refId;
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/blogs/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      const filteredBlogs = data.filter(
        (blog) => !blog.muteBy.includes(currentId)
      );
      setBlogs(filteredBlogs);
      setFilteredBlogs(filteredBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("description", description);
    formData.append("creatorId", currentId);
    imgs.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("http://localhost:3000/blogs/blogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newBlog = await response.json();
        navigate(`/blog-details/${newBlog._id}`);
        setBlogs([...blogs, newBlog]);
      } else {
        console.error("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error during the blog post creation:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImgs((prevImgs) => [...prevImgs, ...newFiles]);
    }
  };

  const handleToggleLike = async (blogId, refId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs/like/${blogId}/${refId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to toggle like");
      }

      const updatedBlog = await response.json();
      setFilteredBlogs(
        blogs.map((blog) => (blog._id === blogId ? updatedBlog : blog))
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleMutePost = async (blogId, refId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs/mute/${blogId}/${refId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to mute post");
      }

      // Re-fetch the blogs to update the list
      await fetchBlogs();
    } catch (error) {
      console.error("Error muting post:", error);
    }
  };

  const handleSearch = (value) => {
    const filtered = blogs.filter((blog) =>
      blog.heading.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div>
      <BlogSearchBar onSearch={handleSearch} />

      <Typography variant="h3" sx={{ mt: 3, ml: 1 }}>
        Blog
      </Typography>

      {showPostForm && (
        <Card style={{ marginBottom: "20px" }}>
          <Box sx={{ m: 2, flexDirection: "column" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Blog Heading"
                  fullWidth
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Blog Description"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={handleImageChange}
                  />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleSubmit}>
                  Post
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      )}

      {filteredBlogs.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          onToggleLike={() => handleToggleLike(post._id, currentId)}
          onMutePost={() => handleMutePost(post._id, currentId)}
          currentId={currentId}
        />
      ))}
    </div>
  );
};
