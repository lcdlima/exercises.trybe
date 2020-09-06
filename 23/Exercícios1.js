// #1
db.bios.find({ _id: 8 });
db.bios.find({ _id: 8 }).pretty();

//#2
db.bios.find({ _id: 8 }, { "name": 1, _id: 1 });
db.bios.find({ _id: 8 }, { "name": 1, _id: 1 }).pretty();

//#3
db.bios.find({ _id: 8 }, { _id: 0, "name": 1, "birth": 1 });
db.bios.find({ _id: 8 }, { _id: 0, "name": 1, "birth": 1 }).pretty();

//#4
db.bios.find({ "name.first": "John" });
db.bios.find({ "name.first": "John" }).pretty();

//#5
db.bios.find({}).limit(3);
db.bios.find({}).limit(3).pretty();

//#6
db.bios.find({}).skip(5).limit(2);
db.bios.find({}).skip(5).limit(2).pretty();

// Importando arquivos para a instância local do MongoDB
// mongoimport --db nome_do_banco --collection nome_da_collection --file ~/caminho_para_arquivo/arquivo.json

//#7
db.books.count();

//#8
db.books.count({ "status": "PUBLISH" });

//#9
db.books.find({}, { _id: 0, "title": 1, "isbn": 1, "pageCount": 1 }).limit(3);

//#10
db.books.find({ "status": "MEAP" }, { _id: 1, "title": 1, "authors": 1, "status": 1 }).skip(5).limit(10);
