import axios from 'axios';
import Post from '../models/Post';
import User from '../models/User';

const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';


/**
 * @returns {Promise<User[]>}
 */
export const getAllUsers = async () => {
  let rawUsers = await axios.get(URL_USERS);
  let users = rawUsers.data.map(userData => new User(userData));
  return users;
};

/**
 * @returns {Promise<Post[]>}
 */
export const getAllPosts = async () => {
  let rawPosts = await axios.get(URL_POSTS);
  let posts = [];
  for (const postData of rawPosts.data) {
    let comments = await axios.get(`${URL_POSTS}/${postData.id}/comments`);
    posts.push(new Post(postData, comments.data))
  }
  return posts;
};

/**
 * @param {number} postId 
 * @param {string} text 
 */
export const postComment = async (postId, text) => {
  await axios.post(URL_POSTS, {
    "postId": postId,
    "text": text 
  });
}
