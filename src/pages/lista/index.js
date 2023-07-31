import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import axios from 'axios';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


function Lista() { 
  const [faturas, setFaturas] = React.useState([]);

  React.useEffect(() => {
    getFaturas();
  }, []);

  const getFaturas = () => {
        // URL do endpoint onde você quer enviar o objeto
      const url = 'http://localhost:3333/fatura';

      //Enviando o objeto usando o método POST do Axios
     axios.get(url)
        .then(response => {
          console.log('Resposta do servidor:', response.data);         
          setFaturas(response.data);
        }
        )
}

  



const deleteFatura = (id) => {
  const url = 'http://localhost:3333/fatura/' + id;
  axios.delete(url)
    .then(response => {
      console.log('Resposta do servidor:', response.data);
      alert("Fatura excluída com sucesso!");
      getFaturas();
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
}





return (
  <div className="bg-light" style={{width: '100%',height:'1000px'}}>
  <h1 className='text-center text-primary'>Lista das Faturas</h1>
   
      <Grid item xs={12} md={6} mx={10}>
          <Typography sx={{ mt: 4, mx: 2 }} variant="h6" component="div">
           Faturas total {faturas.length}
          </Typography>
          <Demo>
            <List dense={false} style={{ borderRadius: '20px' }}>
              {faturas.map((fatura) =>
                <ListItem key={fatura.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete"
                      onClick={() => deleteFatura(fatura.id)}
                    >
                      <DeleteIcon sx={{color:'red'}}/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue' }}>
                      <TextSnippetIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={fatura.numero_cliente}
                    secondary={fatura.mes_referencia + ' - ' + fatura.valor_total}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
  </div>
);
}

export default Lista;


