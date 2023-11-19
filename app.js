const express = require("express")
const students = require("./db")
const app =  express()

app.use(express.json())

const PORT = (5000)
// endpoints
app.get("/api/", (req, res)=>{
    res.status(200).json({
        message: "server continue running students successful", students})

    
})



app.get("/api/students", (req, res)=>{
    res.status(200).json({
        message: "server continue running students successful",students})

  
})
app.get("/api/students/:userID", (req, res)=>{


  const userID = req.params.userID

  const user = students.find((each, i)=>{
    return each.id == userID

  })
  res.status(200).json({
    message: "server return one student successful",
    user
  })



  console.log({userID});

  
  })


  if (!students.length === 0){
    return res.status(404).json({
        message: "user not found"
    })
  }




  app.post("/api/studentsdetails", (req, res)=>{
    
        const {id, name, gender, physics, maths, english}= req.body
        
        const student = req.body

        if(!id) return res.status (400).json({message:
          "please enter gender"})

            if(!name) return res.status(400,).json({message:
              "please enter name"
            })
            
            if(!gender) return res.status (400).json({message:
            "please enter gender"})

            if(!physics) return res.status (400).json({message:
              "please enter physics"})

              if(!maths) return res.status (400).json({message:
                "please enter maths"})

               if(!english) return res.status (400).json({message:
                  "please enter english"})
                res.status(200).json({ 
                  message: "student details successful",
                 student
            
                 
                })
                students.push(student)
                console.log(student); 
          })
 
          



app.listen(PORT,  ()=>{
    console.log(`server is running on${PORT}`)
})
























// const express = require("express")
// const users = require("./db")
// const app =  express()

// app.use(express.json())

// const PORT = 8000



// // enpoints

// app.get("/api/", (req, res)=>{

// })

// app.get("/api/users", (req, res)=>{

// })

// app.get("/users/:userID", (req, res)=>{

  
//   const userID = req.params.userID

//   const user = users.filter((each, i)=>{
//     return each.id == userID

//   })

//  console.log({userID});



//   if (!user, length === 0){
//     return res.status(404).json({
//         message: "user not found"
//     })
//   }
  

//   app.get("/api/users/:deptName", (req, res)=>{

//     const department = req.params.dept
//     const deptStudents = users.filter((each)=>{
//         return each.dept == department
//     })

// })
// res.status(200),json({
//     message: "successful",
//     deptStudents
// })
// })

// app.post("/api/login", (req, res)=>{
//     const {email, password}= req.body 
//     if(!email) returnres.status(400,).json({message:
//       "please enter email"
//     })
//     if(!password) return res.status (400).json({message:
//     "please enter password"})

//     res.status(200).json({
//         message: "login successful", 
//         email,
//         password 
//     })
// })




    






// app.listen(PORT,  ()=>{
//     console.log(`server is running on${PORT}`);
// })
