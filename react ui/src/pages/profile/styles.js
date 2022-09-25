import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  courseItem: {
    backgroundColor: '#d9ddf19c',
    boxShadow: '0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
    borderRadius: '22px',
    margin: '10px 180px',
    overflow: 'hidden',
    position: 'Relative',
    transition: 'box-shadow 200ms cubic-bezier(0.4,0,0.2,1)',
    padding: '12px',
    userSelect: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  profileTitle:{
    backgroundColor:'#536dfe9c',
    padding: '7px',
    borderRadius: '2px',
    marginBottom: '38px',
    fontSize: '28px',
    color: '#f1f1f1',
    textAlign: 'center'
  }
}));
