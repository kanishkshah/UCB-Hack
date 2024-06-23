import React from "react";

export const Services = (props) => {
 // var perf =require('./index.html');
  return (
    <div id="services" className="text-center" style={{maxHeight:"500px"}}>
      <div className="container" style={{maxHeight:"400px"}}>
      <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nursia Chatbot</h2>
        </div>
        <iframe
      src="/template.html"
      style={{ border: 'none', height:'200px' }}
      title="Embedded HTML"
    />

      </div>
    </div>
  );
};