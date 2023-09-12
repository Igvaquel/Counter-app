import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('pruebas en <FirstApp />', () => { 
    
    const title = "Hola soy ignacio"
    const subTitle = "subtitulo"

   test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <FirstApp title={title}/> )
        expect( container ).toMatchSnapshot()

   })

    test('debe demostrar el mensaje "Hola soy ignacio"', () => { 
        
        render( <FirstApp title={title}/> )
        expect( screen.getByText(title)).toBeTruthy()

    })
    test('debe demostrar el titulo en un h1', () => { 
        
        render( <FirstApp title={title}/> )

        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title )

    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        
        render( <FirstApp title={title} subTitle={subTitle}/> )

        expect( screen.getAllByText(subTitle).length).toBe(1)

     })
 })