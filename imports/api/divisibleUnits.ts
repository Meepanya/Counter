import { Mongo } from "meteor/mongo";
import MongoCollections from "./collectionNames";

export const DivisibleUnits = new Mongo.Collection(
  MongoCollections.divisibleCollectionName
);

export const DivisionUnitConfig = new Mongo.Collection(
  MongoCollections.divisionUnitConfigName
);
