import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const CustomPhoneInput = ({ onChange, inputName, value }) => {
  return (
    <PhoneInput
      value={value}
      onChange={onChange}
      masks={{ ve: '... ... ....' }}
      inputProps={{
        name: inputName,
        required: true,
      }}
      containerStyle={{
        marginTop: '1em',
      }}
      inputStyle={{
        width: '100%',
      }}
      enableSearch
    />
  );
};

export default CustomPhoneInput;
