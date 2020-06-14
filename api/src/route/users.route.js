const router = require('express').Router();
const userCache = require('../user/user.cache');
const userController = require('../user/user.controller');
const { validate } = require('../user/user.validator');

router.get('/', async (req, res) => res.json(await userController.allUsers()));

router.post('/update', async (req, res) => {

  let body = req.body;
  let valid = validate(body);

  if (!valid) {
    res.status(500).json({
      code: 500,
      message: "Invalid user schema"
    });
    return;
  }

  if (userCache.get(body._id)) {
    userCache.update(body);
    res.json(userCache.values);
    return;
  }

  let value = await userController.saveUser(body);

  if (value) {
    userCache.update(value);
  }

  res.json(await userController.allUsers());

});

router.get('/find/:id', async (req, res) => {

  let { id } = req.params;

  if (id.length != 18) {
    res.status(500).json({
      code: 500,
      message: "Invalid id"
    });
    return;
  }

  let found = await userCache.getOrLoad(id);
  if (found) {
    res.json(found);
    return;
  }
  
  res.status(404).json({ code: 404, message: "User not found" });

});

module.exports = router;
