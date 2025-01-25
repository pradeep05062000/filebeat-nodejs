// import logger from "./logger.js"
const logger = require("./logger.js")

const homeController = (req,res) =>{
    try{
        logger.info("welcome home page")
        res.send("welcome Home Page")
    }catch(error){
        console.log(error)
    }
}

const postController = (req,res) => {
    try{
        logger.info("welcome Post page")
        res.send("Welcome Post page")
    }catch(error){
        console.log(error)
    }
}
const errorController = (req,res) => {
    try{
        throw new Error('Simulated error');
    }catch(error){
        logger.error('Error occurred', error);
    res.status(500).send('Something went wrong');
    }
}

const controllers = { homeController, postController,errorController}

module.exports = controllers