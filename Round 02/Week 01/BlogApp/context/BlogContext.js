import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogPost':
      return state.map((blogPosts) => {
        return blogPosts.id === action.payload.id ? action.payload : blogPosts;
      });
    case 'delete_blogPost':
      return state.filter((blogPosts) => blogPosts.id !== action.payload);
    default:
      return state;
  }
};
// create Blog Provider
// add Blog Function
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: 'add_blogPost', payload: {title, content}});
    callback();
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogPost', payload: id});
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blogPost', payload: {id, title, content}});
    callback();
  };
};
export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [{title: 'abc', content: 'test', id: 1}],
);
