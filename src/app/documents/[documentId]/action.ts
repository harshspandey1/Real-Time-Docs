'use server'
import { ConvexHttpClient } from 'convex/browser';
import { auth, clerkClient } from '@clerk/nextjs/server'
import { api } from '../../../../convex/_generated/api';

const convex=new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids:Id<"documents">[]) {
  return await convex.query(api.documents.getByIds,{ids});
  
}

export async function getUsers() {
  const { userId, orgId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const clerk = await clerkClient();

  if (orgId) {
    // all org members
    const response = await clerk.users.getUserList({ organizationId: [orgId] });
    return response.data.map((user) => ({
      id: user.id,
      name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? 'Anonymous',
      avatar: user.imageUrl,
    }));
  }

  // fallback → just current user
  const currentUser = await clerk.users.getUser(userId);
  return [{
    id: currentUser.id,
    name: currentUser.fullName ?? currentUser.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: currentUser.imageUrl,
  }];
}
