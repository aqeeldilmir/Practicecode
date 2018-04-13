import * as React from 'react';
const logo = require('./tlogo.png');
interface TweetProps {
     name: string;
     text: string;
 }
interface UserProps {
    name: string;    
 }
const Getimage = () => {
    return <img src={logo} alt="Image does not load"/>;
};

const UserInfo = (props: UserProps) => {
  
  return(
      <div className="UserInfo">
        <Getimage />
        <div className="UserName">
        {props.name}</div>
    </div>);
}; 

class Tweet extends React.Component<TweetProps, {}> {
    constructor(props: TweetProps) {
        super(props);
          
    }
    render() {
        return(
        <div className="Tweet">
        <UserInfo name={this.props.name} />
        <br/>
        <div className="text">{this.props.text}</div>
        </div>);
    }
}

export default Tweet;