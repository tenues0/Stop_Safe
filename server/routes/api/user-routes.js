const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveInsurance,
  deleteInsurance,
  saveRegistration,
  deleteRegistration,
  saveTicket,
  deleteTicket,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveInsurance).put(authMiddleware, saveRegistration).put(authMiddleware, saveTicket);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/books/:bookId').delete(authMiddleware, deleteInsurance).delete(authMiddleware, deleteRegistration).delete(authMiddleware, deleteTicket);

module.exports = router;
