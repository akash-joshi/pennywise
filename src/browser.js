import React from 'react';

import EmptyPage from './components/empty-page';
import WebPage from './components/web-page';
import { prepareUrl } from './utils/helpers';

const { ipcRenderer } = window.require('electron');

class Browser extends React.Component {
  state = {
    url: ''
  };

  onUrl = (url) => {
    this.setState({
      url: prepareUrl(url)
    });
  };

  onFile = (file) => {
    ipcRenderer.send('loadPDF', file);
  }

  render() {
    return (
      <div className='browser-wrap'>
        {
          this.state.url
            ? <WebPage url={ this.state.url } onUrl={ this.onUrl }/>
            : <EmptyPage onUrl={ this.onUrl } onFile={this.onFile}/>
        }
      </div>
    );
  }
}

export default Browser;
