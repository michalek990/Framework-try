// const express = require("express")
// const path = require("path")
// const handleBars = require("handlebars")
// const exphbs = require("express-handlebars")
// const mongoose = require("mongoose")

// const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access")
// const app = express()
// app.use(express.urlencoded({
//  extended: true
// }))

// app.set("views", path.join(__dirname, "/"))
// app.engine(
//  "hbs",
//  exphbs.engine({
//  handlebars: allowInsecurePrototypeAccess(handleBars),
//  extname: "hbs",
//  defaultLayout: "layout",
//  layoutsDir: __dirname,
//  })
// )
// app.set("view engine", "hbs")
// app.listen(3000, () => {
//  console.log("Serwer nasłuchuje na porcie 3000")
// })
// const studentSchema = new mongoose.Schema({
//     fullName: String,
//     email: String,
//     mobile: Number,
//     city: String,
//    })
//    const Student = mongoose.model("Student", studentSchema)
//    mongoose.connect(
//     "mongodb+srv://michal:rower5520@cluster0.ks78a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     {
//     useNewUrlParser: true
//     },
//     err => {
//     if (!err) {
//     console.log("Connection succeeded")
//     } else {
//     console.log("Error in connection: " + err)
//     }
//     }
//    )
//    app.get("/", (req, res) => {
//     res.send(`
//     <h3 style="text-align:center">Baza danych studentów</h3>
//     <h4 style="text-align:center">Kliknij <a href="/list"> tutaj</a>, aby uzyskać dostęp do bazy.</h4>`)
//    })
//    app.get("/list", (req, res) => {
//     Student.find((err, docs) => {
//     if (!err) {
//     res.render("list", {
//     list: docs
//     })
//     } else {
//     console.log("Błąd pobierania danych" + err)
//     }
//     })
//    })
//    app.get("/addOrEdit", (req, res) => {
//     res.render("/views/addOrEdit", {
//     viewTitle: "Dodaj studenta"
//     })
//    })
//    app.post("/", (req, res) => {
//     if (req.body._id == "") {
//     insert(req, res)
//     } else {
//     update(req, res)
//     }
//    })
//    app.get("/:id", (req, res) => {
//     Student.findById(req.params.id, (err, doc) => {
//     if (!err) {
//     res.render("/views/addOrEdit", {
//     viewTitle: "Zaktualizuj dane studenta",
//     student: doc
//     });
//     }
//     })
//    })
//    app.get("/delete/:id", (req, res) => {
//     Student.findByIdAndRemove(req.params.id, (err, doc) => {
//     if (!err) {
//     res.redirect("/list")
//     } else {
//     console.log("Błąd podczas usuwania: " + err)
//     }
//     })
//    })
//    function insert(req, res) {
//     var student = new Student()
//     student.fullName = req.body.fullName
//     student.email = req.body.email
//     student.mobile = req.body.mobile
//     student.city = req.body.city
//     student.save((err, doc) => {
//     if (!err) {
//     res.redirect("/list")
//     } else {
//     console.log("Błąd podczas dodawania studenta: " + err)
//     }
//     })
//    }
//    function update(req, res) {
//     Student.findOneAndUpdate(
//     { _id: req.body._id },
//     req.body,
//     { new: true },
//     (err, doc) => {
//     if (!err) {
//     res.redirect("list")
//     } else {
//     console.log("Błąd podczas aktualizowania danych: " + err)
//     }
//     }
//     )
//    }
   
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const handleBars = require("handlebars")
const exphbs = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access")
const app = express()
app.use(express.urlencoded({
 extended: true
}))
app.set("views", path.join(__dirname, "/"))
app.engine(
 "hbs",
 exphbs.engine({
 handlebars: allowInsecurePrototypeAccess(handleBars),
 extname: "hbs",
 defaultLayout: "layout",
 layoutsDir: __dirname,
 })
)
app.set("view engine", "hbs")
app.listen(3000, () => {
    console.log("Serwer nasłuchuje na porcie 3000")
})
const studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    mobile: Number,
    city: String,
   })
   const Student = mongoose.model("Student", studentSchema)
   mongoose.connect(
    "mongodb://localhost:27017/StudentDB",
    {
    useNewUrlParser: true
    },
    err => {
    if (!err) {
    console.log("Connection succeeded")
    } else {
    console.log("Error in connection: " + err)
    }
    }
   )
   app.get("/", (req, res) => {
    res.send(`
    <h3 style="text-align:center">Baza danych studentów</h3>
    <h4 style="text-align:center">Kliknij <a href="/list"> tutaj</a>, aby uzyskać dostęp do bazy.</h4>`)
   })
   app.get("/list", (req, res) => {
    Student.find((err, docs) => {
    if (!err) {
    res.render("list", {
    list: docs
    })
    } else {
    console.log("Błąd pobierania danych" + err)
    }
    })
   })
   app.post("/addOrEdit", (req, res) => {
    res.render("addOrEdit", {
    viewTitle: "Dodaj studenta"
    })
   })
   app.post("/", (req, res) => {
    if (req.body._id == "") {
    insert(req, res)
    } else {
    update(req, res)
    }
   })
   app.get("/:id", (req, res) => {
    Student.findById(req.params.id, (err, doc) => {
    if (!err) {
    res.render("addOrEdit", {
    viewTitle: "Zaktualizuj dane studenta",
    student: doc
    });
    }
    })
   })
   app.get("/delete/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
    res.redirect("/list")
    } else {
    console.log("Błąd podczas usuwania: " + err)
    }
    })
   })
   function insert(req, res) {
    var student = new Student()
    student.fullName = req.body.fullName
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    student.save((err, doc) => {
    if (!err) {
    res.redirect("/list")
    } else {
    console.log("Błąd podczas dodawania studenta: " + err)
    }
    })
   }
   function update(req, res) {
    Student.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
    if (!err) {
    res.redirect("list")
    } else {
    console.log("Błąd podczas aktualizowania danych: " + err)
    }
    }
    )
   }
