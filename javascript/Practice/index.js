var users = [
  {
    name: "Muhammad Mutahir",
    avatar: "https://i.pravatar.cc/150?u=MuhammadMutahir",
    intro: "Frontend Developer",
  },
  {
    name: "Muhammad Aashir",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=MuhammadAashir",
    intro: "Backend Developer",
  },
  {
    name: "Saboor",
    avatar: "https://s11-avatar.com/api/avatar?name=Saboor",
    intro: "UI/UX Designer",
  },
  // ...more users
];

var currentNumber = 0;

var getProfile = document.querySelector(".profile-name");
var getProfileImage = document.querySelector(".profile-img");
var profileIntro = document.querySelector(".profile-intro");
var btnBack = document.querySelector(".btn-back");

function showProfile() {
  currentNumber = currentNumber + 1;

  if (currentNumber == users.length) {
    currentNumber = 0;
  }

  if (currentNumber == -1) {
    currentNumber = users.length - 1;
  }

  getProfile.textContent = users[currentNumber].name;
  getProfileImage.src = users[currentNumber].avatar;
  profileIntro.textContent = users[currentNumber].intro;
}

var btnNext = document.querySelector(".btn-next");

btnNext.addEventListener("click", showProfile);
btnBack.addEventListener("click", showProfile);
