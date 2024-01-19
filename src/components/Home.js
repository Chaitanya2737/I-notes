

import Note from "./note";

const Home = (props) => {
 const {ShowAlert} = props

  return (
   <>
   <Note ShowAlert={ShowAlert}/>
  
   </>
  );
};

export default Home;
