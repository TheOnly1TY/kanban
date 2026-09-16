const express = require("express")
const boardController = require("../controllers/boards")

const router = express.Router()


router.route("/").get(boardController.getAllBoards)

module.exports = router