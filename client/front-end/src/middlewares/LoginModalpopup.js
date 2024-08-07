import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginModalCheck } from '../Redux/reducers/Login_model_reducers';
import Form from 'react-bootstrap/Form';
function LoginModalpopup() {
  const [user,setUser]=useState({
    email:"",
    password:"",
    userName:""
  });

  const {email,password,userName}=user;
  const handleChange=(e)=>{
    setUser({...user,[e.target.value]:e.target.value})
  }
  const formDatas=[
    {
      id:1,
      name:"userName",
      value:userName,
      label:"UserName",
      type:"text"
      
    },
    {
      id:2,
      name:"email",
      value:email,
      label:"Email",
      type:"email"


    },
  
    {
      id:3,
      name:"password",
      value:password,
      label:"Password",
      type:"password"

      
    }
  ]
    const dispatch=useDispatch();
    const state=useSelector((state)=>state?.Login)
  const [show, setShow] = useState(null);
  const handleClose = () => {setShow(false)
    dispatch(loginModalCheck(false));
  };
  const handleShow = () => setShow(true);
useEffect(()=>{
if(state?.loginModal)
{
    setShow(state?.loginModal)
}
},[state])
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal {state?.modalShow?"Register User":"Login User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {state?.modalShow?<>
          {formDatas?.map((item,index)=>{
            return(
              <div>
           
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{item?.label}</Form.Label>
        <Form.Control type={item?.type} placeholder={`Please Enter ${item?.label}`} 
         name={item?.name}
         value={item?.value}
         onChange={handleChange}
        />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
              </div>
            )
          })}
          
          </>:<>
          {formDatas?.slice(1,3)?.map((item,index)=>{
            return(
              <div>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{item?.label}</Form.Label>
        <Form.Control type={item?.type} placeholder={`Please Enter ${item?.label}`} 
        name={item?.name}
        value={item?.value}
        onChange={handleChange}
        />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
              </div>
            )
          })}
          </>}
         <div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">{state?.modalShow?"Register":"Login"}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModalpopup;