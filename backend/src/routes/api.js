const express = require('express');
const router = express.Router();

const { PrismaClient } = require("../../generated/prisma_client");
const prisma = new PrismaClient()


router.get('/', async (req, res) => {
    try {
        res.send("hello")

  } catch (err) {
    console.log(err);
    res.status(500).send('There has been an error' + err)
  }
})

router.get('/userAmount', async (req, res) => {
    try {
        const userCount = await prisma.user.count()
  res.json(
    userCount == 0
      ? "No users have been added yet."
      : "Some users have been added to the database."
  );

  } catch (err) {
    console.log(err);
    res.status(500).send('There has been an error' + err)
  }
})

router.post('/addUser', async (req, res) => {
    try {
        const {username} = req.body;
        const data = await prisma.user.create({
            data: {
            username: username,
            }
        })
        res.status(201).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('There has been an error')
    }
})

module.exports = router;