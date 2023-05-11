
const mongoose= require('mongoose')

const quizSchema = mongoose.Schema({
    
        creator: String,
        title: String,
        description: String,
        questions: [
          {
            title: String,
            answerOptions: [],
            correctOptions: []
          }
        ]
      }
)


const quizModel= mongoose.model('quizdata',quizSchema)

module.exports={
    quizModel
}