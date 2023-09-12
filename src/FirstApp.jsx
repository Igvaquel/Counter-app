import PropTypes from "prop-types"

export const FirstApp = ( { title, subTitle } ) => {
    return (
        <>
            <h1 data-testid="test-title" >{ title }</h1>
            <h3>{ subTitle }</h3>

        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultPorps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo'
}