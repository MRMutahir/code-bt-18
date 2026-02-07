function loginUser(username, callback) {
  console.log("User logged in");
  callback({ id: 1, name: username });
}

function getUserProfile(userId, callback) {
  console.log("Profile fetched");
  callback({ userId: userId, role: "admin" });
}

function getUserPosts(profileId, callback) {
  console.log("Posts fetched");
  callback([
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
  ]);
}

loginUser("sami", (logindata) => {
  getUserProfile(logindata.id, (profiledata) => {
    getUserPosts(profiledata.userId, (postdata) => {
      console.log("postdata >>>>", postdata);
    });
  });
});

// loginUser("muhammad", (data) => {
//   console.log("logindata", data);
//   getUserProfile(data.id, (profiledata) => {
//     console.log("profiledata", profiledata);
//     getUserPosts(profiledata.userId, (postdata) => {
//       console.log(postdata);
//     });
//   });
// });

// const mutahir = new Promise((resolve, reject) => {
//   //   const user = { id: 1, name: "Muhammad" };
//   const user = null;
//   if (user) {
//     return resolve(user);
//   } else {
//     return reject("user not found");
//   }
// });

// const response = mutahir
//   .then((data) => {
//     console.log("data >>>>>>>", data);
//   })
//   .catch((err) => {
//     console.log("err >>>>>>>", err);
//   })
//   .finally(console.log("Promise complete hogaya"));
// console.log(response);

// function loginUser(username) {
//   console.log("User logged in");
//   const user = { id: 1, name: username };
//   return new Promise((resolve, reject) => {
//     if (user) {
//       return resolve(user);
//     } else {
//       return reject("user not found");
//     }
//   });
// }

// function getUserProfile() {
//   console.log("Profile fetched");
//   const user = { id: 1, name: "muhammad" };
//   return new Promise((resolve, reject) => {
//     if (user) {
//       return resolve(user);
//     } else {
//       return reject("user not found");
//     }
//   });
// }

// function getUserPosts(profileId) {
//   console.log("Posts fetched");

//   const post = [
//     { id: 1, title: "Post One" },
//     { id: 2, title: "Post Two" },
//   ];

//   return new Promise((resolve, reject) => {
//     if (post) {
//       return resolve(post);
//     } else {
//       return reject("post not found");
//     }
//   });
// }

// loginUser("saboor")
//   .then((data) => {
//     console.log(data);

//     return getUserProfile();
//   })
//   .then((data2) => {
//     console.log(data2);
//     return getUserPosts();
//   })
//   .then((data3) => {
//     console.log(data3);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
