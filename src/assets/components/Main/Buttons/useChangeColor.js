import { useAppDispatch } from "../../../../store/hooks/hooks"
import { colorStates } from "../../../../store/reducers/headerColor";

const useChangeColor = () => {
    const dispatch = useAppDispatch();

    const changeToWhite = () => {
        dispatch({ type: colorStates.WHITE })
    }

    const changeToBlue = () => {
        dispatch({ type: colorStates.BLUE })
    }

    return {
        changeToWhite,
        changeToBlue
    }
}

export default useChangeColor;