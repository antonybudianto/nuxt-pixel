import moment from "moment";

export default defineNuxtPlugin((app) => {
  app.provide("moment", moment);
});
