const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

//const port = process.env.PORT || 3000

app.use(express.json())                                                             // automatically parse incoming JSON to an Object
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})




/*
// to demonstrate the File Uploads 123

const multer = require('multer')
const upload = multer({
    
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        // if (!file.originalname.endsWith('.pdf')) {
        //     return cb(new Error('Please upload a PDF'))
        // }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
},(error, req, res, next) => {                                                                                                                      // second argument is for error in JSON format instead of HTML document
    res.status(400).send({ error: error.message })
})

*/












/*
//const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'abc123'}, 'thisismynewcourse', { expiresIn: "1m"})
    //console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    //console.log(data)

}

myFunction()
*/

/*
// app.use((req, res, next) => {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Challenge
// app.use((req, res, next) => {
//     res.status(503).send('Site is Under Maintenance. Check back soon!')
// })
*/

/*
// Just for Demonstration purpose for 114
const main = async () => {
    // const task = await Task.findById('62836e361b23c5166801c9d7')                         // taskId
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('6283862e0e5fc33ad8b548f5')                          // userId  
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)                                               
    // //console.log(user)                                               
}

main()
*/

//const Task = require('./models/task')
//const User = require('./models/user')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)
// }

//http://localhost:3000/users/6283862e0e5fc33ad8b548f5/avatar