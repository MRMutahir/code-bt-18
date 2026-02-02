function loginUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
                reject("Username missing");
            } else {
                console.log("User logged in");
                resolve({ id: 1, name: username });
            }
        }, 1000);
    });
}


function getUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) {
                reject("User ID missing");
            } else {
                console.log("Profile fetched");
                resolve({ id: 101, userId: userId, role: "admin" });
            }
        }, 1000);
    });
}


function getUserPosts(profileId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!profileId) {
                reject("Profile ID missing");
            } else {
                console.log("Posts fetched");
                resolve([
                    { id: 1, title: "Post One" },
                    { id: 2, title: "Post Two" }
                ]);
            }
        }, 1000);
    });
}


loginUser("Ali")
    .then(user => {
        return getUserProfile(user.id);
    })
    .then(profile => {
        return getUserPosts(profile.id);
    })
    .then(posts => {
        console.log(posts);
    })
    .catch(error => {
        console.log("Error:", error);
    });
