import user from './faker';
const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
  res.json({user})
})


module.exports = router;
