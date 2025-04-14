type ButtonProps = {
    bgColor: string
}
export const Button = ({ bgColor }: ButtonProps) => {
    return (
        <button className={`${bgColor} text-white p-2 rounded-md`}>button</button>
    )
}
