const bcrypt = require("bcrypt");

//Check if user email exists

const doesEmailExist = function(email, users) {
  let foundEmail;
  //console.log("HELPER USERS: ", users)
  users.forEach(user => {
   // console.log("TARGET EMAIL: ", email)
    //console.log("USER EMAIL: ", user.email)
    if (user.email === email) {
     // console.log("EMAIL HELPER: TRUE")
      return (foundEmail = true);
    }
  });
  console.log("EMAIL HELPER: ", foundEmail);
  return foundEmail || false;
};



// Returns user ID if and only if their email exists in database
const findIdFromEmail = function(email, password, users) {
  let foundId;
  for (let key in users) {
    if (users[key].email === email) {
      foundId = key;
    }
  }
  return foundId || false;
};

const authenticatePassword = function(validatedEmail, password, users) {
  bcrypt
    .compare(password, users[validatedEmail].hashedPassword)
    .then(result => {
      if (result) console.log("helper: ", result);
    })
    .catch(err => console.log("authentication failed: ", err));
};

const findUrlsForUserId = function(userId, urlDataBase) {
  let userLinks = {};

  for (let link in urlDataBase) {
    if (urlDataBase[link].userId === userId) {
      userLinks[link] = urlDataBase[link].longURL;
    }
  }
  return userLinks;
};

const validateUserLink = function(userId, shortlink, urlDataBase) {
  const userLinks = findUrlsForUserId(userId, urlDataBase);

  let usersMatch = false;

  for (let key in userLinks) {
    if (key === shortlink) {
      return (usersMatch = true);
    }
  }
};

const createUser = function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (doesEmailExist(email, users)) {
    res
      .status(400)
      .send(
        'CONGRATS, YOU ALREADY HAVE AN ACCOUNT WITH THAT EMAIL!  <a href="/registration"> GO BACK AND LOG IN!</a>'
      );
    res.redirect("/registration");
  } else if (!email || !password) {
    res
      .status(400)
      .send(
        'WE REALLY NEED YOU TO ENTER AN EMAIL <em>AND</em> PASSWORD TO CREATE AN ACCOUNT  <a href="/registration">try again</a>'
      );
    res.redirect("/registration");
  } else {
    const userId = generateRandomString();

    users[userId] = {
      userId,
      email,
      hashedPassword
    };
    req.session.userId = userId;

    res.status(303).redirect("/urls");
  }
};

module.exports = {
  doesEmailExist
};