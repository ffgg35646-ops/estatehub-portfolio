import mongoose, { Schema, model, models } from "mongoose";


const PropertySchema = new Schema(

  {

    title: {
      type: String,
      required: true,
      trim: true,
    },


    description: {
      type: String,
      required: true,
    },


    price: {
      type: Number,
      required: true,
    },


    location: {
      type: String,
      required: true,
    },


    images: [
      {
        type: String,
      }
    ],


    category: {
      type: String,
      enum: [
        "Apartment",
        "House",
        "Villa",
        "Office",
        "Land",
      ],
      default: "Apartment",
    },


    type: {
      type: String,
      enum: [
        "Sale",
        "Rent",
      ],
      default: "Sale",
    },


    bedrooms: {
      type: Number,
      default: 0,
    },


    bathrooms: {
      type: Number,
      default: 0,
    },


    area: {
      type: Number,
      default: 0,
    },


    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },


    status: {
      type: String,
      enum: [
        "Available",
        "Pending",
        "Sold",
      ],
      default: "Available",
    },


  },

  {
    timestamps: true,
  }

);



const Property =
  models.Property ||
  model(
    "Property",
    PropertySchema
  );


export default Property;
