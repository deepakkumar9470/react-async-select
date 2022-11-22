import React,{useState} from 'react'
import AsyncSelect from 'react-select/async';
const MyDropdown = () => {

  const [selectedOption,setSelectedOption] = useState(null)
  const options = [
    { value: 'purple', label: 'Purple' , color: '#3B185F'},
    { value: 'red', label: 'Red',color: '#FF0000' },
    { value: 'orange', label: 'Orange',color: '#FFAE6D' },
    { value: 'green', label: 'Green',color: '#4E9F3D' },
    { value: 'slate', label: 'Slate',color: '#282A3A' },
    { value: 'silver', label: 'Silver',color: '#7F8487' },
  ];

  const handleChange = (selectedOption) =>{
    setSelectedOption(selectedOption)
    console.log(selectedOption)
  }

  const loadOptions = (searchValue,callback) =>{
       setTimeout(() => {
          const filteredValues = options.filter((val) => val.label.toLowerCase().includes(searchValue.toLowerCase()))
           callback(filteredValues)
        }, 2000);
  }
  const colorStyles = {
      control : (styles,{data}) => ({...styles, backgroundColor: '#fff'}),

      option : (styles,{data,isDisabled,isFocused,isSelected}) => {
          return {
            ...styles, 
            color:  data.color
          };
      },
      multiValue : (styles,{data}) =>{
        return {
          ...styles, 
          backgroundColor:  data.color , 
          color:  '#fff'
        };
      },

      multiValueLabel : (styles,{data}) =>{
        return {
          ...styles,  
          color:  '#fff'
        };
      },
    

      multiValueRemove : (styles,{data}) =>{
        return {
          ...styles, 
          cursor : 'pointer', 
          color:  '#fff',
          ':hover' : {
            color:  '#fff'
          }  
        };
      },
  }
  return (
    <div>
      <h2>React Async Dropdown</h2>
      <AsyncSelect
        isMulti
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        styles={colorStyles}
     />
    </div>
  )
}

export default MyDropdown