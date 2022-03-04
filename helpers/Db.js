import mongoose from "mongoose";

const InitDb = (req, res, next) => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Conntected");
    return next();
  }

  mongoose.connect(
    // "mongodb+srv://harsh:1Wx1fkJ8IxY2Z08u@cluster0.qdude.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    "mongodb://localhost:27017/databaseno1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  mongoose.connection.on("connected", () => {
    console.log("Connected to mongo");
    return next();
  });
  mongoose.connection.on("error", (err) => {
    console.log("Connected to mongo", err);
    return res.send("db error");
  });
};
export default InitDb;
