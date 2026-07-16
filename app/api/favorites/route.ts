import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import Favorite from "@/models/Favorite";


const JWT_SECRET = process.env.JWT_SECRET;



async function getUserId() {

  const cookieStore = await cookies();

  const token = cookieStore.get(
    "estate_token"
  )?.value;


  if (!token) {

    return null;

  }



  if (!JWT_SECRET) {

    throw new Error(
      "JWT_SECRET missing"
    );

  }



  const decoded = jwt.verify(
    token,
    JWT_SECRET
  ) as {
    id: string;
  };


  return decoded.id;

}





// Get user favorites
export async function GET() {

  try {

    await connectDB();


    const userId = await getUserId();



    if (!userId) {

      return NextResponse.json(
        {
          message: "Please login first",
        },
        {
          status: 401,
        }
      );

    }



    const favorites = await Favorite.find({
      user: userId,
    });



    return NextResponse.json(
      {
        favorites,
      },
      {
        status: 200,
      }
    );



  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        message: "Server error",
      },
      {
        status: 500,
      }
    );

  }

}







// Add / Remove favorite
export async function POST(
  req: Request
) {

  try {


    await connectDB();



    const userId = await getUserId();



    if (!userId) {

      return NextResponse.json(
        {
          message: "Please login first",
        },
        {
          status: 401,
        }
      );

    }




    const {
      propertyId,
    } = await req.json();





    if (!propertyId) {

      return NextResponse.json(
        {
          message:
            "Property id required",
        },
        {
          status: 400,
        }
      );

    }




    const oldFavorite =
      await Favorite.findOne({
        user: userId,
        propertyId,
      });





    if (oldFavorite) {


      await Favorite.deleteOne({
        _id: oldFavorite._id,
      });



      return NextResponse.json(
        {
          favorite: false,
          message:
            "Removed from favorites",
        },
        {
          status: 200,
        }
      );


    }





    await Favorite.create({

      user: userId,

      propertyId,

    });





    return NextResponse.json(
      {
        favorite: true,
        message:
          "Added to favorites",
      },
      {
        status: 200,
      }
    );



  } catch (error) {


    console.error(error);



    return NextResponse.json(
      {
        message:
          "Server error",
      },
      {
        status: 500,
      }
    );


  }

}
