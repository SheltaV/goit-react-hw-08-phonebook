import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "redux/filterReducer";
import { selectFilter } from "redux/selectors";
import { Container, Input, Text } from "./Filter.styled";

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    return (<Container>
        <Text>Find contacts by name:</Text>
        <Input type="text" value={filter} onChange={evt => dispatch(addFilter(evt.target.value))} />
    </Container>)
}