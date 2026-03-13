import { connectDB } from "@/lib/mongodb";
import Idea from "@/models/Idea";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ideas = await Idea.find().sort({ upvotes: -1 });

    return NextResponse.json(ideas);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch ideas" });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDB();

    const idea = await Idea.create({
      title: body.title,
      description: body.description,
      author: body.author,
    });

    return NextResponse.json(idea);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create idea" });
  }
}

export async function PATCH(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await connectDB();

    const idea = await Idea.findByIdAndUpdate(
      id,
      { $inc: { upvotes: 1 } },
      { new: true }
    );

    return NextResponse.json(idea);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upvote" });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await connectDB();

    await Idea.findByIdAndDelete(id);

    return NextResponse.json({ message: "Idea deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete idea" });
  }
}