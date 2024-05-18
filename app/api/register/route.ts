import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

export const POST =  async(req: NextRequest, res: NextResponse)=> {
    const formData = await req.json();

    const { firstName, lastName, email, password, confirmPassword } = formData;



    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the user
      const user = await db.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });

      return NextResponse.json({
        Message: "User regsitered succesfully successfully",
        status: 200,
      });
    } catch (error) {
    
        return NextResponse.json({
            Message: "Internal server error",
            status: 500,
          });        
    
  }
}

