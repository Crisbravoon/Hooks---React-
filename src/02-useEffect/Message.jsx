
import { useEffect } from "react";
import { Alert } from "@mui/material";

export const Message = () => {

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);


    return (
        <div>
            <Alert
                variant="outlined"
                severity="error">
                Usuario ya existente.
            </Alert>
        </div>
    )
};
