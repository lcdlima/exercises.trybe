// Importando arquivos para a instância local do MongoDB
// mongoimport --db nome_do_banco --collection nome_da_collection --file ~/caminho_para_arquivo/arquivo.json

//#2
db.superheroes.find({ "aspects.height": { $lt: 180 } });

//#3
db.superheroes.count({ "aspects.height": { $lt: 180 } });

//#4
db.superheroes.count({ "aspects.height": { $lte: 180 } }).count({ "aspects.height": { $lte: 180 } });

//#5
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

//#6
db.superheroes.count({ "aspects.height": { $gte: 200 } });

//#7
db.superheroes.find({ "aspects.eyeColor": "green" });

//#8
db.superheroes.count({ "aspects.eyeColor": "blue" });

//#9
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } });

//#10
db.superheroes.count({ "aspects.hairColor": { $in: ["black", "No Hair"] } });

//#11
db.superheroes.count({ "aspects.hairColor": { $nin: ["black", "No Hair"] } });

//#12
db.superheroes.count({ "aspects.height":{ $not: { $gt: 180 } } });

//#13
db.superheroes.find({ $and: [{"aspects.height":{ $not: { $gt: 180 } }}, {"race": { $ne: "human" }}] });

//#14
db.superheroes.find({ $and: [{"aspects.height": {$in: [180, 200]} }, {"publisher": "Marvel Comics" }] });

//#15
db.superheroes.find({
  $and: [
    {"aspects.weight": {$gt: 80, $lt: 100}},
    {"race": {$in: ["Human", "Mutant"]}},
    {"publisher": { $ne: "DC Comics" }}
  ]
});

//#16
db.superheroes.count({ "race": { $exists: "false" } });

//#17
db.superheroes.count({ "aspects.hairColor": { $exists: "true" } });

//#18
db.superheroes.deleteOne({ "publisher" : "Sony Pictures"});

//#19
db.superheroes.deleteMany({ "publisher": "George Lucas" });
