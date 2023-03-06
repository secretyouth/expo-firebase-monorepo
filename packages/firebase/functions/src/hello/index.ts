import * as functions from 'firebase-functions';

/**
 * Hello World
 */
export const world = functions.https.onCall((data: any, context: any) => {
  return {
    success: true,
  };
});
