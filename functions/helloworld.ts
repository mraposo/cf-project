//import type { PagesFunction } from '@cloudflare/workers-types';

export const onRequest: PagesFunction = async (context: any) => {
  const url = new URL(context.request.url);

 return new Response("Hello, world!");
};
