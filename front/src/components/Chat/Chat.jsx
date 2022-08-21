import s from './chat.module.css';

const Chat = ({ items }) => {
    const elements = items.map(({ id, type, message }) => {
        const className = type === 'your' ? s.yourMessage : s.userMessage;
        return <p key={id} className={className}>{message}</p>
    })
    return (
        <div className={s.chat}>
            {elements}
        </div>
    )
}

export default Chat;
