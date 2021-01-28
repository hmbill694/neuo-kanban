
import Card from '../general/Card'
import TextBox from '../general/TextBox'
import InsetOnHoverButton from '../general/InsetOnHoverButton'
import { map } from '../../utils/fp';
import { useHistory } from 'react-router-dom';

const styles = {
  label: 'nm-convex-white-sm mx-2 p-3 rounded-lg w-32',
  input: 'nm-convex-white-lg focus:nm-inset-white rounded-lg outline-none mx-2 p-3 w-8/12'
}

const createTextBox = x => (
 <div key={x.label} className="flex justify-around w-full m-4"> 
   <TextBox {...x}  />
 </div>
)
const textBoxInfo = [{ label: 'Username: ', styles }, { label: 'Password', styles }]

const makeChildren = (clickFn) =>  (
  <div className="flex flex-col w-full justify-center items-center">
    {map(createTextBox, textBoxInfo)}
    <InsetOnHoverButton clickFunction={clickFn}/>
  </div>
)

const LoginCard = () => {
    const history = useHistory()

    return (<Card children={makeChildren(() => history.push('/home'))} />)
}

export default LoginCard
