const bcrypt = require("bcrypt");


//Check if user email exists

const doesEmailExist = function(email, users) {
  let foundEmail;
  for (let key in users) {
    if (users[key].email === email) {
      return foundEmail = true;
    }
  }
  return foundEmail || false;
};






const createUser = function(req, res) {

  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (doesEmailExist(email, users)) {

    res.status(400).send('CONGRATS, YOU ALREADY HAVE AN ACCOUNT WITH THAT EMAIL!  <a href="/registration"> GO BACK AND LOG IN!</a>');
    res.redirect("/registration");

  } else if (!email || !password) {

    res.status(400).send('WE REALLY NEED YOU TO ENTER AN EMAIL <em>AND</em> PASSWORD TO CREATE AN ACCOUNT  <a href="/registration">try again</a>');
    res.redirect("/registration");

  } else {

    const userId = generateRandomString();

    users[userId] = {
      userId,
      email,
      hashedPassword,
    };
    req.session.userId = userId;

    res.status(303).redirect("/urls");
  }
};