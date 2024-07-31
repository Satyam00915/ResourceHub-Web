import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function createUser(userObj: User) {
  const user = await prisma.user.create({
    data: userObj,
    select: {
      id: true,
      password: true,
    },
  });
  console.log(user);

  if (user) {
    return true;
  } else {
    return false;
  }
}
