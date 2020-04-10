const initState = {
    posts:[
        {
            "userId": 1,
            "id": 1,
            "title": "Welcome aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "Welcome qui est esse",
            "body": "Welcome est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "userId": 1,
            "id": 3,
            "title": "Welcome ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          }
    ],
    contacts :[
            {
              "id": 1,
              "FirstName":"Manohar",
              "LastName":"Kumar",
              "Address":"2202 Chesnut Circle",
              "Phone":9238492830
            },
            {
              "id": 2,
              "FirstName":"Rajesh",
              "LastName":"Kumar",
              "Address":"2203 Chesnut Circle",
              "Phone":9238492830
            },
            {
              "id": 3,
              "FirstName":"Kiran",
              "LastName":"Kumar",
              "Address":"2202 Chesnut Circle",
              "Phone":9238492830
            },
            {
              "id": 4,
              "FirstName":"Kimberly",
              "LastName":"Manohar",
              "Address":"2202 Chesnut Circle",
              "Phone":9238492830
            }
    ]
}

const rootReducer = (state = initState, action) => {
  
    if(action.type === 'DELETE_POST'){
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id;
      });
      return {
        ...state,
        posts: newPosts
      } 
    }

    return state;
  }

export default rootReducer;