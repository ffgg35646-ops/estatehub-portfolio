import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;



export async function GET() {

  try {

    await connectDB();


    const properties = await Property.find()
      .populate(
        "owner",
        "name email"
      )
      .sort({
        createdAt: -1,
      });



    return NextResponse.json(
      {
        properties,
      },
      {
        status: 200,
      }
    );



  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        message: "Failed to fetch properties",
      },
      {
        status: 500,
      }
    );

  }

}





export async function POST(
  request: NextRequest
) {

  try {


    await connectDB();



    const token = request.cookies.get(
      "estate_token"
    )?.value;



    if (!token) {

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }




    if (!JWT_SECRET) {

      throw new Error(
        "JWT_SECRET is missing"
      );

    }




    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as {
      id: string;
    };





    const body = await request.json();





    const property =
      await Property.create({

        ...body,

        owner: decoded.id,

      });





    return NextResponse.json(
      {
        message: "Property created successfully",
        property,
      },
      {
        status: 201,
      }
    );




  } catch (error) {


    console.error(error);


    return NextResponse.json(
      {
        message: "Failed to create property",
      },
      {
        status: 500,
      }
    );


  }

}
