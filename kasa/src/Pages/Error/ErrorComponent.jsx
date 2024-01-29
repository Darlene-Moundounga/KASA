import React from 'react';

export default function ErrorComponent() {
    return (<React.Fragment>
            <p className="errorNumber" >404</p>
            <p className="errorText">Oups! La page que vous demandez n'existe pas</p>
            <a href="/" className="errorLink">Retourner à la page d'accueil</a>
        </React.Fragment>)
}