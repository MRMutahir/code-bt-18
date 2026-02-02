
function loginUser(username, callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback({ id: 1, name: username });
    }, 1000);
}

function getUserProfile(userId, callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        callback({ id: 101, userId: userId, role: "admin" });
    }, 1000);
}

function getUserPosts(profileId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback([
            { id: 1, title: "Post One" },
            { id: 2, title: "Post Two" } 
        ]);
    }, 1000);
}

loginUser("Ali", function (user) {
    getUserProfile(user.id, function (profile) {
        getUserPosts(profile.id, function (posts) {
            console.log(posts);
        });
    });
});
