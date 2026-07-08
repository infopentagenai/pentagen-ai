import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const {
      message,
      image,
      mimeType,
    } = await req.json();

    if (!message && !image) {
      return new Response(
        "Message or image is required",
        {
          status: 400,
        }
      );
    }

    let contents: any;

    // Image + Text
    if (image) {
      contents = [
        {
          text:
            message ||
            "Describe this image in detail.",
        },
        {
          inlineData: {
            mimeType:
              mimeType || "image/png",
            data: image,
          },
        },
      ];
    } else {
      // Only Text
      contents = message;
    }

    const stream =
      await ai.models.generateContentStream({
        model: "gemini-2.5-flash",
        contents,
      });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            controller.enqueue(
              encoder.encode(chunk.text ?? "")
            );
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type":
          "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      "Something went wrong.",
      {
        status: 500,
      }
    );
  }
}