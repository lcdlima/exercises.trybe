const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx.getSession({
    user: 'root',
    password: '%N.K-"Xgc)qtcs4gnytg}U"/hsf}]#55}NrjQG7T8fmff9;T%4',
    host: 'localhost',
    port: 33060,
    schema: 'cep_exercicio',
  })
  .then ((session) => {
    return session.getSchema('cep_exercicio');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
};

module.exports = connection;
