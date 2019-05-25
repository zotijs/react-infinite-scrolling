import React, { useState } from 'react';
import Modal from './Modal';

const ErrorsList = ({title, errors}) => {
    const [isVisible, setIsVisible] = useState(true);

    const renderActions = () => {
        return (
            <React.Fragment>
                <button className="ui button" onClick={() => setIsVisible(false)}>OK</button>
            </React.Fragment>
        );
        } 

        const renderContent = () => {
        return <div>{errors.map(error => <div key={error.reason}>{error.message}</div>)}</div>;
        }

        if (!isVisible) {
            return null;
        }

        return (
            <Modal 
                title={title}
                content={renderContent()}
                actions={renderActions()}
                onDismiss={() => setIsVisible(false)}
            />
        );
};

export default ErrorsList;