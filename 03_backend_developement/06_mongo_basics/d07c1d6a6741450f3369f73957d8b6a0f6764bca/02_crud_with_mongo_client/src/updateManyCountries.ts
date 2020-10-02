import * as mongo from "mongodb";
type Country = {
  name: string;
  capital: string;
  continent: string;
};
export function updateManyCountries(db: mongo.Db): Promise<any[] | Country> {
  return db
  .collection("worldAtlas")
  .updateMany({ continent: "Europe" }, { $set: { continent: "EU" }})
  .then(() => {
     return db.collection("worldAtlas").find({ continent: "EU" }).toArray()
  })
}
