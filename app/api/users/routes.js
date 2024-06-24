import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, phone, profession, gender, rate, expertiseLevel,image } = await request.json();   



    await connectMongoDB()

    await User.create({
        name,
        phone,
        profession,
        gender,
        rate,
        expertiseLevel,
        image
    })

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 })

}