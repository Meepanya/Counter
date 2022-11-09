import { Meteor } from "meteor/meteor";
import onStartMongo from "./mongo";

Meteor.startup(async () => {
  await onStartMongo();
});
