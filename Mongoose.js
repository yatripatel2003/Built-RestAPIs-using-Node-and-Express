const mongoose = require('mongoose');



const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/Mobile");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    });

    const ProductModel = mongoose.model("products", ProductSchema);

    // Inserting a new document
    let newData = new ProductModel({ name: "Galaxy S20", price: 1200 });
    let insertionResult = await newData.save();

    console.log("Insertion result:", insertionResult);

    // Fetching all products after insertion
    let allProducts = await ProductModel.find();
    console.log("All products after insertion:", allProducts);
}





const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const main1 = async () => {

    await mongoose.connect("mongodb://localhost:27017/Mobile");

    const ProductModel = mongoose.model("products", ProductSchema);

    let data = new ProductModel({ name: "note 44", price: 3340 });

    let result = await data.save();

    console.log(result);

}

const Update = async () => {

    const ProductModel = mongoose.model("products", ProductSchema);

    let data = await ProductModel.updateOne({
        name: "note 44"
    },
        {
            price: 3330
        }

    );

    console.log(data);
}


const Delete = async () => {
    const ProductModel = mongoose.model("products", ProductSchema);
    let data = await ProductModel.deleteOne({
        name: "note 44"
    });

    console.log(data);
}
// main1();
// Update();
Delete();


