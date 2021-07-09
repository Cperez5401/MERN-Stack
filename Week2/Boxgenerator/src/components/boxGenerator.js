import React, {useState} from 'react';

const boxGenerator = (props) =>{
    const [box, setBox] = useState([]);
    const [colorField, setColorField] = useState([])

    const handleColorSubmit = (e) =>{
        e.preventDefault();
        //new array when setting updating an array in state
        setBox([...box, colorField]);
    }
    return (
    <div>
        <form
            onSubmit={(e) =>{
                handleColorSubmit(e);
            }}
        >
            <div>
                <label>Color: </label>
                <input
                    onChange={ (e) => {
                        setColorField(e.target.value);
                    }}
                    type="color"
                />
            </div>
            <button>Add</button>
        </form>
        {
        box.map((url) =>{
            return < />;
        })}
    </div>
    );
}

export default boxGenerator;