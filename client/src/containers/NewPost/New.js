import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";
import "./new.css";
import { useMutation } from "react-query";
import axios from "../../utils/axios";

function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  console.log(body);
  console.log(tags);
  console.log(title);

  const createPost = async (data) => {
    const res = await axios.post("/posts", data);
    return res.data;
  };
  const postMutation = useMutation(createPost);

  const handleTagChange = (tag) => {
    setTags(tag);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanBody = body.replace(/<\/?[^>]+(>|$)/g, "");

    postMutation.mutate({ title, body: cleanBody, tags });
  };

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Create Post</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  type="text"
                  placeholder="New Post title here..."
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                  className="react-quill"
                  theme="snow"
                  onChange={setBody}
                  value={body}
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                <TagsInput
                  name="tags"
                  placeholder="press enter to add new tag"
                  onChange={handleTagChange}
                  value={tags}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="button-que" onClick={handleSubmit}>
          Add your question
        </button>
      </div>
    </div>
  );
}

export default New;
