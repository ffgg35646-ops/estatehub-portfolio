import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Property from "@/models/Property";


export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();


    const { id } = await context.params;


    const property =
      await Property.findById(id)
        .populate(
          "owner",
          "name email"
        );



    if (!property) {

      return NextResponse.json(
        {
          message: "Property not found",
        },
        {
          status: 404,
        }
      );

    }



    return NextResponse.json(
      {
        property,
      },
      {
        status: 200,
      }
    );



  } catch (error) {

    console.error(error);


    return NextResponse.json(
      {
        message: "Failed to fetch property",
      },
      {
        status: 500,
      }
    );

  }

}







export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {

  try {

    await connectDB();


    const { id } = await context.params;


    const body = await request.json();



    const property =
      await Property.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );



    if (!property) {

      return NextResponse.json(
        {
          message: "Property not found",
        },
        {
          status: 404,
        }
      );

    }



    return NextResponse.json(
      {
        message: "Property updated",
        property,
      },
      {
        status: 200,
      }
    );



  } catch (error) {


    console.error(error);


    return NextResponse.json(
      {
        message: "Update failed",
      },
      {
        status: 500,
      }
    );


  }

}








export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {


  try {


    await connectDB();



    const { id } = await context.params;



    const property =
      await Property.findByIdAndDelete(id);




    if (!property) {

      return NextResponse.json(
        {
          message: "Property not found",
        },
        {
          status: 404,
        }
      );

    }





    return NextResponse.json(
      {
        message: "Property deleted",
      },
      {
        status: 200,
      }
    );



  } catch (error) {


    console.error(error);



    return NextResponse.json(
      {
        message: "Delete failed",
      },
      {
        status: 500,
      }
    );


  }

}
