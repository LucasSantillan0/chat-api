const express = require('express');
const router = express.Router();
const {Word, Response} = require('../db.js');
/* GET home page. */


function getResponseIndex(userMessage,responseList){
  const messageLength = userMessage.length;
  const arrayKeys = []
  for (i in responseList){
    arrayKeys.push(0)
    for (j in userMessage){
      let isIn = responseList[i].find(e=>e===userMessage[j])
      if(isIn !== undefined){
        arrayKeys[i]++
      }
    }
    arrayKeys[0]=arrayKeys[0]/messageLength
  }
  const betterResponse= Math.max(...arrayKeys)
  return (arrayKeys.findIndex(e=>e===betterResponse)+1)
}


router.post('/create', async function(req, res, next) {

  let {userWords, userResponse}=req.body;

  
  userWords= userWords.toLowerCase().split(" ").map(e=>{return {word:e}})
  


  const newResponse = await Response.create({
    response:userResponse,
    words:userWords
  },{
  include:Word
  }
  )

  res.send(await Response.findAll({ include: Word }))

});

router.get("/" ,async function (req, res){
  let {userMessage} =req.body
  userMessage = userMessage.toLowerCase().split(" ")
  let responseList = await Response.findAll({ include: Word })
  responseList = responseList.map(e=>e.words.map(e=>e.word))


  const index = getResponseIndex(userMessage,responseList)

  const {response} = await Response.findByPk(index)

  res.send(response)
})


module.exports = router;