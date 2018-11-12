export const deletePost = (id) => {
     return {
          type: 'DELETE_POST',
          payload: id
     }
}

export const createPost = (post) => {
     return {
          type: 'CREATE_POST',
          payload: post
     }
}
