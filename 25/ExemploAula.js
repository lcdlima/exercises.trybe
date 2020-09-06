//#1
db.packages.aggregate([
  {
    $project: {
      "package": 1,
      "total": {$add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]}
    }
  }
]);

//#2
db.packages.aggregate([
  {$match: {"package": {$in: ["Guarapari", "Caldas Novas"]}}},
  {$project: {
    "package": 1,
    "newStartDate": {$add: ["$dates.start_date", (120 * 24 * 60 * 60 * 1000)]},
    "newEndDate": {$add: ["$dates.end_date", (120 * 24 * 60 * 60 * 1000)]}
  }}
]);
// ou
db.packages.aggregate([
  {$match: {"package": {$in: ["Guarapari", "Caldas Novas"]}}},
  {$addFields: {"milissegundos": (120 * 24 * 60 * 60 * 1000)}},
  {$project: {
    "package": 1,
    "newStartDate": {$add: ["$dates.start_date", "$milissegundos"]},
    "newEndDate": {$add: ["$dates.end_date", "$milissegundos"]}
  }}
]);
// ou
const milissegundos = (120 * 24 * 60 * 60 * 1000);
db.packages.aggregate([
  {$match: {"package": {$in: ["Guarapari", "Caldas Novas"]}}},
  {$project: {
    "package": 1,
    "newStartDate": {$add: ["$dates.start_date", milissegundos]},
    "newEndDate": {$add: ["$dates.end_date", milissegundos]}
  }}
]);

//#3
db.packages.aggregate([
  {$match: {"package": {$in: ["Guarapari", "Caldas Novas"]}}},
  {$project: {
    "package": 1,
    "dates": 1,
    "newStartDate": {$subtract: ["$dates.start_date", (120 * 24 * 60 * 60 * 1000)]},
    "newEndDate": {$subtract: ["$dates.end_date", (120 * 24 * 60 * 60 * 1000)]}
  }}
]);
//ou
db.packages.aggregate([
  {$match: {"package": {$in: ["Guarapari", "Caldas Novas"]}}},
  {$addFields: {
    "subtracted_start_date": {$subtract: ["$dates.start_date", (120 * 24 * 60 * 60 * 1000)]},
    "subtracted_end_date": {$subtract: ["$dates.end_date", (120 * 24 * 60 * 60 * 1000)]},
  }},
  {$project: {
    "package": 1,
    "dates": 1,
    "subtracted_start_date": 1,
    "subtracted_end_date": 1
  }}
]);

//#4
db.packages.aggregate([
  {$addFields: {"total_cost": {$add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]}}},
  {$project: {
    "package": 1,
    "dolar_total_cost": {$multiply: ["$total_cost", 5.43]}
  }}
]);
//ou
db.packages.aggregate([
  {$addFields: {"total_cost": {$add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]}}},
  {$project: {
    "package": 1,
    "dolar_total_cost": {$ceil: {$multiply: ["$total_cost", 5.43]}}
  }}
]);
//ou
db.packages.aggregate([
  {$addFields: {
    "total_cost": {$add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"]}
  }},
  {$addFields: {
    "dolar_total_cost": {$multiply: ["$total_cost", 5.43]}
  }}
]);