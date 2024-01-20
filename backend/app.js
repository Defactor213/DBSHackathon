const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require('./routes/userRoutes')
 
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.json());

// /itenary/<w/e routes>

// user/user
// app.use('/itenary', )

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on  ${PORT}`));
