
describe('Pruebas en <DemoComponent/>', () => { 
    
    test('Esta prueba no debe de fallar', () => { 
        
        //1. inicializacion
        const message1 = 'Hola Mundo'
    
        //2. estimulo
        const message2 = 'Hola Mundo'
        //3. observar el comportamineto... esperado
        expect( message1 ).toBe( message2 );
    })
    
})
