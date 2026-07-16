import mongoose, { Schema, Document, Model } from "mongoose";


export interface IFavorite extends Document {
  user: mongoose.Types.ObjectId;
  propertyId: string;
  createdAt: Date;
}



const FavoriteSchema = new Schema<IFavorite>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    propertyId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



FavoriteSchema.index(
  {
    user: 1,
    propertyId: 1,
  },
  {
    unique: true,
  }
);



const Favorite: Model<IFavorite> =
  mongoose.models.Favorite ||
  mongoose.model<IFavorite>(
    "Favorite",
    FavoriteSchema
  );


export default Favorite;
