import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const constactSchema = new Schema({
  firstName: {
    type: String,
    required: "enter first name"
  },
  lastName: {
    type: String,
    required: "enter last name"
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
