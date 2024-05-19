import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = await req.json();

  try {
    // Find the user by email
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: 'Invalid email or password',
          status: 401,
        },
        { status: 401 }
      );
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: 'Invalid email or password',
          status: 401,
        },
        { status: 401 }
      );
    }

    // If login is successful
    return NextResponse.json({
      message: 'Login successful',
      status: 200,
    });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json(
      {
        message: 'Internal server error',
        status: 500,
      },
      { status: 500 }
    );
  }
};
