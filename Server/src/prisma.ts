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

interface Resource {
  id?: number;
  link: string;
  Title: string;
  Description: string;
  field: string;
  userId: number;
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

export async function createResource(resourceObj: Resource) {
  const resource = await prisma.resource.create({
    data: resourceObj,
  });

  console.log(resource);

  if (!resource) {
    return false;
  }
  return true;
}

export async function fetchResources(userId: number) {
  const resources = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      Resource: true,
    },
  });

  if (!resources) {
    return false;
  }
  return resources;
}

type updateResourceParams = Pick<
  Resource,
  "Title" | "Description" | "link" | "field" | "id"
>;

type updateResourceParamsOptional = Partial<updateResourceParams>;
export async function updateResource(updateObj: updateResourceParamsOptional) {
  const resource = await prisma.resource.update({
    where: {
      id: updateObj.id,
    },
    data: updateObj,
  });

  console.log(resource);

  if (!resource) {
    return false;
  }
  return true;
}

export async function deleteResource(resourceId: number) {
  const deleteStatus = await prisma.resource.delete({
    where: {
      id: resourceId,
    },
  });

  if (!deleteResource) {
    return false;
  }
  return true;
}
