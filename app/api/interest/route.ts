import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, interest } = await req.json();

  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: 'User not found',
          status: 404,
        },
        { status: 404 }
      );
    }

    await db.interest.create({
      data: {
        userId: user.id,
        interest,
      },
    });

    return NextResponse.json({
      message: 'Interest saved successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Error saving interest:', error);
    return NextResponse.json(
      {
        message: 'Internal server error',
        status: 500,
      },
      { status: 500 }
    );
  }
};
