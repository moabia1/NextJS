import authOptions from "@/lib/auth";
import uploadOnCloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const session = await getServerSession(authOptions)
    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json({message:"User not found"},{status:400})
    }

    const formData = req.formData();
    const name = (await formData).get("name") as string
    const file = (await formData).get("file") as Blob | null

    let imageUrl; 
    if (file) {
      imageUrl = await uploadOnCloudinary(file)
    }

    const user = await User.findByIdAndUpdate(session.user.id, { name, image: imageUrl }, { new: true })
    if (!user) {
      return NextResponse.json({message:"User not found"},{status:400})
    }

    return NextResponse.json({
      user
    },{status:200})
  } catch (error) {
    return NextResponse.json({
      message:`edit error: ${error}`
    },{status:500})
  }
}