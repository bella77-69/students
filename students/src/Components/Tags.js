import React, {useState} from 'react';
import './studentCard.css';

function Tags () {
    const [tags, setTags] = useState([]);
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
        }
        event.preventDefault();
        event.target.value = "";
    };
    console.log(tags);

    return (
        <>
        <div>
            <ul className="Tags">
                {tags.map((tag, index) => (
                    <li className="Tag" key={index}><span>{tag}</span></li>
                ))}
            </ul>
            <form className="Tags-Form">
                <input className="Tags-Input" type="text" onKeyPress={event => (event.key === "Enter" ? addTags(event) : null)} placeholder="Add a tag" />
            </form>
        </div>
        </>
    )
};

export default Tags;