// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GolfRound, Players } = initSchema(schema);

export {
  GolfRound,
  Players
};