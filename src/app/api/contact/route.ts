import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields — name and phone are always required
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (body.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
    }

    // Determine form type
    const isRebook = body.formType === "rebook";

    // Log the submission (replace with email service in production)
    console.log(isRebook ? "=== REBOOK REQUEST ===" : "=== NEW BOOKING REQUEST ===");
    console.log(`Name: ${body.name}`);
    console.log(`Phone: ${body.phone}`);
    if (body.email) console.log(`Email: ${body.email}`);
    if (body.petType) console.log(`Pet Type: ${body.petType}`);
    if (body.petName || body.dogName) console.log(`Pet Name: ${body.petName || body.dogName}`);
    if (body.dogBreed) console.log(`Breed: ${body.dogBreed}`);
    if (body.dogWeight) console.log(`Weight: ${body.dogWeight}`);
    if (body.service) console.log(`Service: ${body.service}`);
    if (body.lastService) console.log(`Last Service: ${body.lastService}`);
    if (body.sameService) console.log(`Same Service as Last Time: Yes`);
    if (body.preferredDate) console.log(`Preferred Date: ${body.preferredDate}`);
    if (body.preferredTime) console.log(`Preferred Time: ${body.preferredTime}`);
    if (body.location) console.log(`Location: ${body.location}`);
    if (body.preferredContact) console.log(`Preferred Contact: ${body.preferredContact}`);
    if (body.notes) console.log(`Notes: ${body.notes}`);
    console.log("===========================");

    return NextResponse.json({
      success: true,
      message: isRebook
        ? "Thanks! Christine will confirm your rebooking shortly."
        : "Thank you! Christine will get back to you within a few hours to confirm your appointment.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please call us at 724-898-1988." },
      { status: 500 }
    );
  }
}
