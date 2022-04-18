const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const validateCreateCourse = require("../../validation/createCourse")
const validateAddContent = require("../../validation/addContent")
const crypto = require('crypto')
const dotenv = require("dotenv");
const Course = require("../../models/Course")
const Lecture = require("../../models/Lecture")
const Content = require("../../models/Content")
const Quiz = require("../../models/Quiz")
dotenv.config()

router.put("/add_lec_content", async (req, res) => {
    const { errors, isValid } = validateAddContent(req.body);

    const token = req.headers["authorization"].split(" ")[1];

    var payload;
    try {
        payload = jwt.verify(token, process.env.secretOrKey);
    } catch (err) {
        return res.json({message: "Not authorized"})
    }

    const newContent = new Content({
        title: req.body.title,
        cld_reference: req.body.cld_reference,
        filetype: req.body.filetype
    })

    var createdContentEntry
    await newContent
    .save()
    .then(content => {
        createdContentEntry = content
    })
    .catch(err => console.log(err))

    console.log("REACHED HERE")
    let lectureId = req.body.lectureId;

    try {
        const lecture_doc = await Lecture.findByIdAndUpdate( 
            {_id: lectureId },
            { $push : { "content": createdContentEntry } }, 
            {upsert : true } )
        
            await lecture_doc
            .save()
            .then(lecture => res.json(lecture))
            .catch(err => console.log(err));

    } catch (err) {
        res.json( { message: err })
    }
});

router.get("/get_lecture/:id", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json( {message: "Not authorized" })
    }

    // let lectureId = req.body.lectureId;
    let lectureId = req.params.id

    try {
        const lec_doc = await Lecture.findOne( {
            _id: lectureId
        });
        console.log(lec_doc)
        // let contentList = lec_doc.content;
        return res.json(lec_doc)
    } catch (error) {
        return res.json( {error: error || "Some error, cannot find lecture"})
    }

})

router.put("/add_quiz", async (req, res) => {
    const token = req.headers['authorization'].split(" ")[1];

    var username;
    try {
        const payload = jwt.verify(token, process.env.secretOrKey);
        username = payload.username;
    } catch (err) {
        console.log(err)
        res.status(403).json({ message: "Not authorized" })
    }
    
    const newQuiz = new Quiz({
        title: req.body.title,
        description: req.body.description,
        questions: req.body.questions
    })

    await newQuiz
    .save()
    .then(quiz => {console.log(quiz)})
    .catch(err => console.log(err))

    let lectureId = req.body.lectureId;
    // console.log(lectureId)
    console.log(newQuiz._id)

    try {
        const lecture_doc_final = await Lecture.findByIdAndUpdate( {_id: lectureId} , {
            $push: { "quiz" : String(newQuiz._id) }
        } , {upsert : true})

        await lecture_doc_final
            .save()
            .then(lecture => 
                {res.json(lecture)
                console.log(lecture)
                })
            .catch(err => console.log(err))
    
    } catch (error) {
        res.json( { message: error} )
    }
})

router.get("/get_quiz/:id", async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    var payload;
    try {
        payload = jwt.verify(token, process.env.secretOrKey)
    } catch (error) {
        res.json({ message: "Not authorized" })
    }

    let quizId = req.params.id;

    try {
        const quiz = await Quiz.findById(quizId) 
        return res.json(quiz)
    } catch (err) {
        console.log(err)
        return res.json( {error :err})
    }
})

module.exports = router;