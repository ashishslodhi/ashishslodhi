import express from 'express';
import { getMessagesByGroup } from '../controllers/messageController.js';

const Router = express.Router();

Router.get('/:group', getMessagesByGroup);

export default Router;
