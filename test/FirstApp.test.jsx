import { getByTestId, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en <FirstApp />', () => { 
    
    // test('debe de hacer match con el snapshot', () => { 
        
    //     const title = "Hola soy ignacio"
    //     const { container } = render( <FirstApp title={title}/> )

    //     expect( container ).toMatchSnapshot()

    // })

    test('debe demostrar el titulo en un h1', () => { 
        
        const title = "Hola soy ignacio"
        const { container, getByText, getByTestId } = render( <FirstApp title={title}/> )
        expect( getByText(title) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        // expect( h1.innerHTML).toBe( title )
        // expect( h1.innerHTML).toContain( title )

        expect( getByTestId('test-title').innerHTML ).toContain( title )

    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        
        const title = "Hola soy ignacio"
        const subTitle= 'VaQUEL'
        const { getByText } = render( <FirstApp title={title} subTitle={subTitle}/> )
        expect( getByText(subTitle) ).toBeTruthy();
     })
 })