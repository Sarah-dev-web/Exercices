import { promises } from "fs";
import * as mongo from "mongodb";

export function findOneCountry(db : mongo.Db) : Promise<any> {
  return db.collection("worldAtlas").findOne({name : "Iceland"})
}
