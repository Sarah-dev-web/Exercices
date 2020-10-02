import * as mongo from "mongodb";
type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function insertOneCountry(db: mongo.Db): Promise <Country> {
  const country = {
    name: "China",
    capital: "Pékin",
    continent: "Asia",
  }
  return db.collection("worldAtlas").insertOne(country).then((result) => { return result.ops[0]})
}
