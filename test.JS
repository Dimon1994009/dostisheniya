var achievements = [];

function addAchievement() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;

  var achievement = {
    title: title,
    description: description,
    comments: []
  };

  achievements.push(achievement);

  updateAchievements();
}

function addComment(achievementIndex) {
  var comment = prompt("Введите комментарий:");

  if (comment) {
    var achievement = achievements[achievementIndex];
    achievement.comments.push(comment);

    updateAchievements();
  }
}

function updateAchievements() 
  var achievementsDiv = document.getElementById("achievements");
  achievementsDiv.innerHTML = "";

  for (var i = 0; i < achievements.length; i++) 
    var achievement = achievements[i];

    var achievementDiv = document.createElement("div");
    achievementDiv.classList.add("achievement");

    var title = document.createElement("h2");
    title.textContent = achievement.title;
    achievementDiv.appendChild(title);

    var description = document.createElement("p");
    description.textContent = achievement.description;
    achievementDiv.appendChild(description);

    var comments = document.createElement("ul");
    for (var j = 0; j < achievement.comments.length; j++) {
      var comment = document.createElement("li");
      comment.textContent = achievement.comments[j];
      comments.appendChild(comment);
    }
    achievementDiv.appendChild(comments);

    var commentButton = document