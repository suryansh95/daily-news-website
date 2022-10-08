import React, { Component } from 'react'

export class ChatBot extends Component {

componentDidMount(){
  
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"3ca5a5f5b6f513026b189b2070680b343","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});


}

  render() {
    return (
      <div> </div>
    )
  }
}

export default ChatBot