var express         = require("express"),
    app             = express(),
    methodOverride  = require("method-override"),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    User            = require("./models/user"),
    client          = require("./models/client")
    
//REQUIRED ROUTES
var indexRoute = require("./routes/index"),
    dataRoute = require("./routes/data")
    
// mongoose.connect("mongodb://localhost/cpmv3", {useNewUrlParser: true});
mongoose.connect("mongodb://thomasmartin:Sic3ParvisMagna@ds143593.mlab.com:43593/datacapture", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended : true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Alliance!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoute);
app.use("/data", dataRoute);

//SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The data capture server has started");
});