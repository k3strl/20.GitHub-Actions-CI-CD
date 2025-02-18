import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    if (models[modelName] && models[modelName].db) {
      // let modelExists = await models[modelName].db.db.listCollections({
      //   name: collectionName
      // }).toArray();
      
      await db.dropCollection(collectionName);
    }

    // if (modelExists.length) {
    //   await db.dropCollection(collectionName);
    // }
  } catch (err) {
    throw err;
  }
}
