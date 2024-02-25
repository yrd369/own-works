import mongoose, { Schema } from "mongoose";

const person = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  createAt: Date,
});

const details = mongoose.model("person-details", person);
export const detailsRequest = async (data) => {
  try {
    const result = await details.create(data);
    console.log("result of request created" + result);
  } catch (err) {
    console.log(err);
  }
};
