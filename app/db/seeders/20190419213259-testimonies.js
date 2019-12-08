'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let testimonies = await queryInterface.rawSelect('testimonies', {where: {}}, ['id']);
        if (!testimonies || testimonies.length === 0) {
            await queryInterface.bulkInsert('testimonies', [{
                active: true,
                text: 'Eu utilizava outros portais de compras para passagens aéreas. A partir do momento que conheci a Sky Milhas, só uso esse! E indico a todos. É fácil, sim.',
                description: 'de Belo Horizonte',
                author: 'Marcos Machado',
                image_url: 'https://image.shutterstock.com/image-vector/user-avatarteacher-260nw-428504188.jpg'
            }, {
                active: true,
                text: 'Meus amigos agendaram uma viagem em grupo, e nunca tínhamos feito uma programação tão econômica. Foi muito divertido, e barato.',
                description: 'de João Pessoa',
                author: 'Maria Oliveira',
                image_url: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993__340.png'
            }, {
                active: true,
                text: 'Graças à Sky Milhas, pude rever meus parentes que não via há muito tempo. Valeu muito a pena!',
                description: 'de Belo Horizonte',
                author: 'João Silva',
                image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lREeMAq8X7mf42T69YFILwJzCpceW_CzlStvw_3DNBZf7eaP'
            }], {});
        }
        else {
            console.log("Testimonies already created, no need to create more!");
        }
    },

    down: async (queryInterface, Sequelize) => {
   }
};
