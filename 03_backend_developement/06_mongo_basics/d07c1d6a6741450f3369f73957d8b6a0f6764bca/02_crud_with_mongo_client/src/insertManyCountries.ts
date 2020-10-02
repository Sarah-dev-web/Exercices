import * as mongo from "mongodb";
type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function insertManyCountries(db : mongo.Db): Promise <Country[]> {
  // code your function here
  const countries = [
    {
      name: "Japan",
      capital: "Tokyo",
      continent: "Asia",
    },
    {
      name: "Germany",
      capital: "Berlin",
      continent: "Europe",
    },
  ]
  return db.collection("worldAtlas").insertMany(countries).then((result) => { return result.ops})
}
