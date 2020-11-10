import React from 'react';
import { useHistory } from 'react-router-dom';

import '../css/ErrorPage.css'

const ErrorPage = () => {
    const history = useHistory();

    setTimeout(() => history.push('/'), 3000);

    return (
        <div className="errorPage">
            <p>404 - Page Doesn't Exist</p>
        </div>
    )
}
 
export default ErrorPage;