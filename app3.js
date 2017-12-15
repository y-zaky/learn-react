var user = {
  name: 'Davros',
  status: "Single",
  friends: [{
      name: "William Hartnell"
    },
    {
      name: "Patrick Troughton"
    },
    {
      name: "Jon Pertwee"
    },
    {
      name: "Tom Baker"
    },
    {
      name: "Peter Davison"
    }
  ]
};

/* App Component renders the whole app. */
const App = ({
    user
  }) =>
  React.createElement('div', null, [
    React.createElement('h1', null, 'MyFace.com'),
    React.createElement(UserProfile, user),
    React.createElement(FriendList, user)
  ]);

/* UserProfile Component renders the user profile. */
const UserProfile = ({
    name,
    status
  }) =>
  React.createElement('div', null, [
    React.createElement('p', null, "Name: " + name),
    React.createElement('p', null, "Status: " + status)
  ]);

/* Renders a list of friends. */
const FriendList = ({
    friends
  }) =>
  React.createElement('ul', null, friends.map((friend) => {
    return React.createElement('li', {
      key: friend.name + "-li"
    }, [
      React.createElement(Friend, friend)
    ])
  }));

/* Renders a single friend */
class Friend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  like() {
    this.setState({ ...this.state,
      liked: true
    })
  }

  render() {
    return React.createElement(
      'span', {
        key: this.props.name,
        className: 'friend',
        onClick: () => {
          this.like()
        }
      },
      "Friends with: " + this.props.name + ` ${this.state.liked ? 'liked':'not liked'}`
    )
  }
}




/* Now render into the root node */
ReactDOM.render(
  React.createElement(App, {
    user: user
  }),
  document.getElementById('app')
);
