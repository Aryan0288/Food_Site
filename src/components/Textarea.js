import React,{useState} from 'react'

export default function Textarea(abc) {
    const [Text,Settext]=useState("Enter the Text Here");
    const TextOnChange = (events)=>{
        Settext(events.target.value);
    }
    const handleUpCase=()=>{
        let newText=Text.toUpperCase();
        Settext(newText);
    }

    const handleCapatalise=()=>{
        let newText=Text.toLowerCase();
        Settext(newText);
    }
    return (
        <div>
            <div className="mb-3">
                <h2>{abc.heading}</h2>
                <textarea className="form-control" value={Text} onChange={TextOnChange} id="form-box" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpCase}>Convert UpperCase</button>
            <button className='btn btn-primary' onClick={handleCapatalise}>Convert Capatalise</button>
        </div>
    )
}
