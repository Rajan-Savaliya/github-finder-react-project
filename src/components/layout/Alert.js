import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext; //-> { name } = this.props ===> this.props.name
                                 //--> { alert } = alertContext ===> alertContext.alert

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg} 
      </div>
    )
  );
};

export default Alert;
