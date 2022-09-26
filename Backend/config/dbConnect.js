const mongoose = require("mongoose");

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://LYH8036:Lyh80360826@cluster0.v9daoma.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
