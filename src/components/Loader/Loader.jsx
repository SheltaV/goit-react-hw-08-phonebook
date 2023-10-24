import { Oval } from 'react-loader-spinner';
import { Spinner } from './Loader.styled'

export const Loader = () => {
    return (<Spinner>
<Oval
    height = "40"
    width = "40"
    color='#ebd192'
    secondaryColor='#9e7f3c'   
    visible={true}
        />
    </Spinner>)
}