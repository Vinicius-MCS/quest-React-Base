interface TextProps {
    textContent: React.ReactNode,
    color: string,
}

export const Text = ({textContent, color}: TextProps) => {
    return <p className={`uppercase text-${color}`}>{textContent}</p>   
}