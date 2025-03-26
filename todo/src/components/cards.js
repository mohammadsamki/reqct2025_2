import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ResponsiveGrid() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cardsData,setCardsData] = useState([
    {
      id:1,
      title: 'Card1',
      discreption: 'Card1 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:2,
      title: 'Card2',
      discreption: 'Card2 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:3,
      title: 'Card3',
      discreption: 'Card3 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:4,
      title: 'Card4',
      discreption: 'Card4 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:5,
      title: 'Card5',
      discreption: 'Card5 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:6,
      title: 'Card6',
      discreption: 'Card6 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
    {
      id:7,
      title: 'Card7',
      discreption: 'Card7 Discreption',
      image: '/images/contemplative-reptile.jpg',
    },
  ]);
  const [formData,setFormData]= useState({title:'',discreption:'',image:''});
  const [updateData,setUpdateData]= useState({title:'',discreption:'',image:''});
  const handelChange = (event)=>{
    console.log({[event.target.name]:event.target.value});
    setFormData({...formData,[event.target.name]:event.target.value});
  }
  const handelChangeUpdate = (event)=>{
    console.log('jhfjk')
    setUpdateData({...updateData,[event.target.name]:event.target.value});
  }
  const handelAddCard = (event)=>{
    event.preventDefault();
    console.log('data added');
    setCardsData([...cardsData,formData])
    console.log(cardsData);
  }
  const handelDeleteCard =(id)=>{
    console.log('delete card');
    console.log(id);
    // cardsData filter return all data exept the data with the id
    setCardsData(cardsData.filter(card=> card.id !== id))
  }
  const handelCardUpdte = (id)=>{
    console.log('update card');
    console.log(id);
    handleOpen();
    const cardToEdit = cardsData.find(card=>card.id ===id);
    console.log(cardToEdit);
    setUpdateData(cardToEdit);
  }

  return (
    <>
       <form onSubmit={handelAddCard}>
        <input type='text' name="title" onChange={handelChange} placeholder='title' />
        <input type='text' name="discreption" onChange={handelChange} placeholder='discreption' />
        <input type='text' name="image" onChange={handelChange} placeholder='image' />
        <button type='submit'>add</button>
      </form>
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            update card wit id = 
          </Typography>
          {/* add form to update the data for the card  */}
          <form>
            <input type='text' value={updateData.title} onChange={handelChangeUpdate} name="titleUpdate" placeholder='update title'/>
            <input type='text' value={updateData.discreption} onChange={handelChangeUpdate}  name="discreptionUpdate" placeholder='update title'/>
            <input type='text' value={updateData.image} onChange={handelChangeUpdate}  name="imageUpdate" placeholder='update title'/>
            <button type='submit'>update</button>
          </form>
        </Box>  
      </Modal>
    </div>
    <Box sx={{ flexGrow: 1 }}>
   
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {/* start grid item  */}
       {/*  map for the cardsData var then generate the cards  */}
       {cardsData.map((card,index)=>(
                <Grid item xs={2} sm={4} md={4} >
                      <Item>
                          <Card sx={{ maxWidth: 345 }}>
                            <p>{card.id}</p>
                              <CardMedia
                                  sx={{ height: 140 }}
                                  image="/images/contemplative-reptile.jpg"
                                  title="green iguana"
                              />
                              <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                  {card.title}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {card.discreption}
                                 
                                  </Typography>
                              </CardContent>
                              <CardActions>
                                  <Button size="small">Share</Button>
                                  <Button size="small" onClick={()=>handelCardUpdte(card.id)} >Update</Button>
                                  <Button size="small" onClick={()=>handelDeleteCard(card.id)}>Delete</Button>
                              </CardActions>
                          </Card>
                      </Item>
                    </Grid>

       ))}
         
          {/* end grid item */}
      </Grid>
    </Box>
    </>
  );
}
