const express = require("express");
const { main } = require("./models/index");
const productRoute = require("./router/product");
const purchaseRoute = require("./router/purchase");
const cors = require("cors");
const Product = require("./models/product");


const app = express();
const PORT = 4000;
main();
app.use(express.json());
app.use(cors());


// Products API
app.use("/api/product", productRoute);

// Purchase API
app.use("/api/purchase", purchaseRoute);





app.get("/testget", async (req,res)=>{
  const result = await Product.findOne({ _id: '661e85616c9d1515ad6fbf6d'})
  res.json(result)

})

// Here we are listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port, ${PORT}`);
});
