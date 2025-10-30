type ButtonProps = {
    label: string,
}

export const Button = ({label}: ButtonProps) => {
    return (
        <button onClick={() => alert("A label desse botão é " + label)}>
            {label}
        </button>
    )
}