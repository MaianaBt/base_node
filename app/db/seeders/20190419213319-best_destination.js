'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      let destinations = await queryInterface.rawSelect('best_destinations', {where: {}}, ['id']);
      if (!destinations || destinations.length === 0) {
          await queryInterface.bulkInsert('best_destinations', [{
              active: true,
              search_url: '/search/?idaEvolta=true&somenteIda=false&classeEconomica=true&classeExecutiva=false&dataIda=2019-11-14&dataVolta=2019-11-21&qtdAdultos=1&qtdCriancas=0&qtdBebes=0&destinoNome=Salvador&origemNome=Rio%20de%20Janeiro&iniciaisAerOrigem=RIO&iniciaisAerDestino=SSA&paisOrigem=BR&paisDestino=BR&descricaoAerOrigem=RIO&descricaoAerDestino=SSA',
              image_url: 'https://s3.amazonaws.com/sky-milhas/cms/1520644886051.png',
              destination: 'Salvador',
              origin: 'Saindo do Rio de Janeiro',
              description: 'Desconto de até 45%'
          },{
              active: true,
              search_url: '/search/?idaEvolta=true&somenteIda=false&classeEconomica=true&classeExecutiva=false&dataIda=2019-11-14&dataVolta=2019-11-21&qtdAdultos=1&qtdCriancas=0&qtdBebes=0&destinoNome=Rio%20de%20Janeiro&origemNome=São%20Paulo&iniciaisAerOrigem=SAO&iniciaisAerDestino=RIO&paisOrigem=BR&paisDestino=BR&descricaoAerOrigem=SAO&descricaoAerDestino=RIO',
              image_url: 'https://s3.amazonaws.com/sky-milhas/cms/1520645700111.png',
              destination: 'Rio de Janeiro',
              origin: 'Saindo de São Paulo',
              description: 'A partir de R$ 120,00'
          },{
              active: true,
              search_url: '/search/?idaEvolta=true&somenteIda=false&classeEconomica=true&classeExecutiva=false&dataIda=2019-11-14&dataVolta=2019-11-21&qtdAdultos=1&qtdCriancas=0&qtdBebes=0&destinoNome=Salvador&origemNome=Rio%20de%20Janeiro&iniciaisAerOrigem=RIO&iniciaisAerDestino=SSA&paisOrigem=BR&paisDestino=BR&descricaoAerOrigem=RIO&descricaoAerDestino=SSA',
              image_url: 'https://s3.amazonaws.com/sky-milhas/cms/1520644886051.png',
              destination: 'Salvador',
              origin: 'Saindo do Rio de Janeiro',
              description: 'Desconto de até 45%'
          },{
              active: true,
              search_url: '/search/?idaEvolta=true&somenteIda=false&classeEconomica=true&classeExecutiva=false&dataIda=2019-11-14&dataVolta=2019-11-21&qtdAdultos=1&qtdCriancas=0&qtdBebes=0&destinoNome=Curitiba&origemNome=São%20Paulo&iniciaisAerOrigem=SAO&iniciaisAerDestino=CWB&paisOrigem=BR&paisDestino=BR&descricaoAerOrigem=SAO&descricaoAerDestino=CWB',
              image_url: 'https://s3.amazonaws.com/sky-milhas/cms/1520646342204.png',
              destination: 'Curitiba',
              origin: 'Saindo de São Paulo',
              description: 'A partir de R$ 140,00'
          }], {});
      } else {
          console.log("Best destinations already created, no need to create more!");
      }
  },

  down: async (queryInterface, Sequelize) => {
  }
};
