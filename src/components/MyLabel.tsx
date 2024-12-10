import "./MyLabel.css"

export interface Props {
    /**
     * Text to Display
     */
    label: string;

    /**
     * Label Size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Text in CAPS 
     */
    allCaps?: boolean,

    /**
     * Color Text
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * Font Color Picker
     */
    fontColor?: string,

    /**
     * Font Color Picker
     */
    backgroundColor?: string,
}


export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor, backgroundColor='transparent' }: Props) => {
    return (
        <span className={`${size} ${color} label`} style={{ color: fontColor, backgroundColor }} >
            {allCaps ? label.toLocaleUpperCase() : label}
        </span>
    )
}

export default MyLabel
