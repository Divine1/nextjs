import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import PlayArrow from '@material-ui/icons/PlayArrow';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Router from 'next/router'


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    padding : "4px"
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleRedirection = () => {
    console.log("in handleRedirection() ")
    if(this.state.expanded){
        this.setState(state => ({ expanded: !state.expanded }));
    }
    else{
        let accountid = "123432345";
        Router.push('/viewaccount?accountid='+accountid);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
                <AccountBalance />
            </Avatar>
          }
          title="123456778"
          subheader="divine"
          action={
            <IconButton>
              <span onClick={this.handleRedirection}>
                <PlayArrow style={{fontSize:"34px"}}/>
              </span>
            </IconButton>
          }
        />
      </Card>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
