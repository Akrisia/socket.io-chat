// import s from './signin-chat-form.module.css';
import { useState } from 'react';

const SigninChatForm = ({onSubmit}) => {
    const [state, setState] = useState({
        name: ''
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => ({ ...prevState, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({
            message: ''
        })
    }

const { name } = state;

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} name='name' onChange={handleChange} placeholder='Напишіть ваше ім"я' />
            <button>Приєднатися</button>
        </form>
    )
}

export default SigninChatForm;