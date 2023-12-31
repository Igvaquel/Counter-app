import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp/>', () => { 
    
    const value = 0;

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={value}/> )
        expect( container ).toMatchSnapshot()
    })

    test('debe de hacer match con el snapshot', () => { 
        const { container,getByText } = render( <CounterApp value={100}/> )
        expect( screen.getByText( 100 )).toBeTruthy()
    })

    test('debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={value}/> )
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('1')).toBeTruthy()
    })

    test('debe de decrementar con el boton -1', () => { 
        render( <CounterApp value={value}/> )
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getAllByText('-1')).toBeTruthy()
    })
    test('debe de funcionar el boton de reset', () => { 
        render( <CounterApp value={value}/> )
        fireEvent.click( screen.getByText('+1'))

        fireEvent.click( screen.getByText('RESET'))
        screen.debug()

        expect( screen.getByText(value)).toBeTruthy()

        
    })
 })