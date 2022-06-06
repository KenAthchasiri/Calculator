import React, { useState } from 'react'
import './Calculator.css'
const CalculatorComponent = () => {
    const [inputValue,setInputValue] = useState('0')
    const [calValue,setCalValue] = useState('0')

    const display = (value) => {
        if(inputValue.toString().charAt(0) === '0') {
            setInputValue(value)
            setCalValue(value)
        } else if(value === 'x') {
            if(value === inputValue[inputValue.length-1]) {
                setInputValue(inputValue)
                setCalValue(calValue)
            } else if(inputValue[inputValue.length-1] === '÷' || inputValue[inputValue.length-1] === '+' || inputValue[inputValue.length-1] === '-'){
                let resIn = inputValue.slice(0,inputValue.length-1)
                let resCal = calValue.slice(0,calValue.length-1)
                setInputValue(resIn+value)
                setCalValue(resCal+'*')
                
            } else{
                setInputValue(inputValue+value)
                setCalValue(calValue+'*')
            }
            
        } else if(value === '÷') {
            if(value === inputValue[inputValue.length-1]) {
                setInputValue(inputValue)
                setCalValue(calValue)
            } else if(inputValue[inputValue.length-1] === 'x' || inputValue[inputValue.length-1] === '+' || inputValue[inputValue.length-1] === '-'){
                let resIn = inputValue.slice(0,inputValue.length-1)
                let resCal = calValue.slice(0,calValue.length-1)
                setInputValue(resIn+value)
                setCalValue(resCal+'/')
                
            } else {
                setInputValue(inputValue+value)
                setCalValue(calValue+'/')
            }
            
        } else if(value === '+'){
            if(value === inputValue[inputValue.length-1]) {
                setInputValue(inputValue)
                setCalValue(calValue)
            } else if(inputValue[inputValue.length-1] === '-'){
                let resIn = inputValue.slice(0,inputValue.length-1)
                let resCal = calValue.slice(0,calValue.length-1)
                setInputValue(resIn+value)
                setCalValue(resCal+value)
            } else if( inputValue[inputValue.length-1] === 'x' ) {
                setInputValue(inputValue)
                setCalValue(calValue)
                
            } else if( inputValue[inputValue.length-1] === '÷' ) {
                setInputValue(inputValue)
                setCalValue(calValue)
                
            }
            else {
                setInputValue(inputValue+value)
                setCalValue(calValue+value)
            }
        } else if(value === '-'){
            if(value === inputValue[inputValue.length-1]) {
                setInputValue(inputValue)
                setCalValue(calValue)
            } else if(inputValue[inputValue.length-1] === '+'){
                let resIn = inputValue.slice(0,inputValue.length-1)
                let resCal = calValue.slice(0,calValue.length-1)
                setInputValue(resIn+value)
                setCalValue(resCal+value)
            } else {
                setInputValue(inputValue+value)
                setCalValue(calValue+value)
            }
        } else{
            setInputValue(inputValue+value)
            setCalValue(calValue+value)
        }

    

    }
    const clearDisplay = () => {
        setInputValue('0')
        setCalValue('0')
    }
    const calculate = () => {
        let result = eval(calValue)
        setCalValue(result)
        setInputValue(result)
    }
    return (
        <div className='calculator'>
            <div className='calculator-display'>
                <h1>{inputValue}</h1>
            </div>
            <div className='calculator-btn'>
                <button className='btn operator' onClick={()=>display('+')}>+</button>
                <button className='btn operator' onClick={()=>display('-')}>-</button>
                <button className='btn operator' onClick={()=>display('x')}>x</button>
                <button className='btn operator' onClick={()=>display('÷')}>÷</button>

                <button className='btn number' onClick={()=>display('7')}> 7 </button>
                <button className='btn number' onClick={()=>display('8')}> 8 </button>
                <button className='btn number' onClick={()=>display('9')}> 9 </button>
                <button className='btn number' onClick={()=>display('4')}> 4 </button>
                <button className='btn number' onClick={()=>display('5')}> 5 </button>
                <button className='btn number' onClick={()=>display('6')}> 6 </button>
                <button className='btn number' onClick={()=>display('1')}> 1 </button>
                <button className='btn number' onClick={()=>display('2')}> 2 </button>
                <button className='btn number' onClick={()=>display('3')}> 3 </button>
                <button className='btn number' onClick={()=>display('.')}> . </button>
                <button className='btn number' onClick={()=>display('0')}> 0 </button>
                <button className='btn clear' onClick={clearDisplay}> C </button>
                <button className='btn operator equal' onClick={calculate}> = </button>
            </div>
        </div>
    )
}

export default CalculatorComponent