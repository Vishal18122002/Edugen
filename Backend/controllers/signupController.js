const User = require('../models/user');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
    });
    
    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error in signup route:', err.message); 
    res.status(500).send('Server Error');
  }
};
