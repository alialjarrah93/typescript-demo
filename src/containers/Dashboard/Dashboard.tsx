import { Component } from 'react';

class Dashboard extends Component {
  state = {};

  componentDidMount(): void {
    this.load();
  }

  load = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  render(): JSX.Element {
    return <div className='dash'></div>;
  }
}

export default Dashboard;
