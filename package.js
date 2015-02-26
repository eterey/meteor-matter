Package.describe({
  name: "uzumaxy:matter",
  summary: "2D rigid body physics engine for the web.",
  version: "0.8.0",
  git: "https://github.com/uzumaxy/meteor-matter"
});

Package.onUse(function(api) {

  api.addFiles([
    "uzumaxy:matter/matter.js"
  ], ["client"]);
});