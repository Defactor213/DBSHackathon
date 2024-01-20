const express = require('express')
const cors = require('cors')
const destinationroute = require("./routes/destinationRoutes")

const itineraryRoutes = require('./routes/itineraryRoutes')

const app = express();

const userRoutes = require('./routes/userRoutes')
 
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.json());
// app.use('')

// /itenary/<w/e routes>

// user/user
app.use('/itinerary', itineraryRoutes)

app.use("/user", userRoutes);

// app.use('/itenary', )
app.use('/destination',destinationroute);
app.listen(PORT, () => console.log(`Server running on  ${PORT}`));
