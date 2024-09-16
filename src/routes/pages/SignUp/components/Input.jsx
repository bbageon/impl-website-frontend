import './Input.css';

export const Input = ({
    id,
    type = 'text',
    title,
    value,
    setValue,
}) => {
    return (
        <div className="signup-input">
            <label htmlFor={id}>{title}</label>
            <input
                name={id}
                type={type}
                placeholder={`${title}을 입력하세요`}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    )
}