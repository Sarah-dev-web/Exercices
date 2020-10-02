import * as mongo from "mongodb";

export function deleteManyCountries(db : mongo.Db) : Promise <boolean> {
  return db
  .collection("worldAtlas")
  .deleteMany({continent : "Europe"})
  .then(result => result.deletedCount === 1 )
}

