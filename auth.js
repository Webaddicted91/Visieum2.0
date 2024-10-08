// routes/auth.js
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Authenticate user credentials
    User.findOne({ username, password }, (err, user) => {
      if (err) {
        res.status(401).send('Invalid credentials');
      } else {
        // Redirect to profile page upon successful login
        res.redirect(`/profile/${user._id}`);
      }
    });
  });
  
  router.get('/profile/:id', (req, res) => {
    const userId = req.params.id;
    User.findById(userId, (err, user) => {
      if (err) {
        res.status(404).send('User not found');
      } else {
        res.render('profile', { user });
      }
    });
  });