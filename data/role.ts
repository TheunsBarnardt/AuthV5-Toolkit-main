import { db } from "@/lib/db";

export const getRoleById = async (roleId: string) => {
  try {
    const role = await db.userRole.findFirst({
      where: { id : roleId },
    });

    return role;
  } catch {
    return null;
  }
};

export const getRoleByName = async (role: string) => {
  try {
    const result = await db.userRole.findFirst({
      where: { role },
    });

    return result;
  } catch {
    return null;
  }
};

