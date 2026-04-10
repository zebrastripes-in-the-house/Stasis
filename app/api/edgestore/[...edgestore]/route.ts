import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
import { auth, currentUser } from "@clerk/nextjs/server";

const es = initEdgeStore.create({
  accessKey: process.env.EDGE_STORE_ACCESS_KEY || "fallback_access_key",
  secretKey: process.env.EDGE_STORE_SECRET_KEY || "fallback_secret_key",
});

const edgeStoreRouter = es.router({
  publicFiles: es
    .fileBucket()
    .beforeUpload(async () => {
      const { userId } = await auth();
      if (!userId) {
        throw new Error("Unauthorized");
      }
      return true;
    })
    .beforeDelete(async () => {
      const { userId } = await auth();
      if (!userId) {
        throw new Error("Unauthorized");
      }
      return true;
    }),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export { handler as GET, handler as POST };

export type EdgeStoreRouter = typeof edgeStoreRouter;
