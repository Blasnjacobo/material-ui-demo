/* eslint-disable no-unused-vars */
import './App.css'
import { Typography, AppBar, Card, CardActions, CardMedia, CardContent, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import useStyles from './styles'
function App () {
  const classes = useStyles()
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              hello everyone, this is a photo album and i am trying to make this sentence as long as possible that could fit in this screen just to visualize how well it fits in this content box.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {
            cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </div>
  )
}

export default App
