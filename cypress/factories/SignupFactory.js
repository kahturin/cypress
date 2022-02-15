var faker = require('faker')
//var cpf = require('gerador-validador-cpf')
export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName() 

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '11111111111',
            //cpf: cpf.generate,
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address:{
                cep: '04746090',
                street: 'Rua Elias Mahfus',
                number: '1000',
                details: '69',
                district: 'Santo Amaro',
                city_uf: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}