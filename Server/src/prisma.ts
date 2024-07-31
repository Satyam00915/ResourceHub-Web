import { PrismaClient } from "@prisma/client";
import { number } from "zod";

const prisma = new PrismaClient();

interface User {
  id: number;
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
    return user.id;
  } else {
    return false;
  }
}

type updateParams = Pick<User, "id" | "email" | "password">;

type updateParamsOptional = Partial<updateParams>;

export async function updateUser(updatobj: updateParamsOptional) {
  const user = await prisma.user.update({
    where: {
      id: updatobj.id,
    },
    data: updatobj,
  });

  console.log(user);

  if (user) {
    return user.id;
  }
  return false;
}

type signInParams = Pick<User, "email" | "password">;

export async function checkUser(signinobj: signInParams) {
  const user = await prisma.user.findUnique({
    where: {
      email: signinobj.email,
    },
  });

  if (user?.password === signinobj.password) {
    return user.id;
  }
  return false;
}
