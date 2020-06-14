import express from 'express';
import UserController from '../user/user.controller';
import MongoUserController from '../user/mongo.user.controller';
import validate from '../user/user.validator';

const router = express.Router();
const userController : UserController = new MongoUserController();

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

  await userController.saveUser(body);

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

  let found = await userController.findById(id);

  if (found) {
    res.json(found);
    return;
  }
  
  res.status(404).json({ code: 404, message: "User not found" });

});

export default router;