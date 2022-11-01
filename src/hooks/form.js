import { useState, useEffect } from 'react';

const useFormHook = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    let name, value;
    if(typeof(event) === 'object'){
      event.persist();
      name = event.target.name;
      value = event.target.value;
      // let { name, value } = event.target;
    } else {
      console.log('event', event)
      //hard coded for slider, change "diffuclty" language if desired, dynamically for stretch goal
      name = 'difficulty';
      value = event;
    }
    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useFormHook;
