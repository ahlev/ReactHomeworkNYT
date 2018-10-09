import React from 'react';
// import './results.css';




export const SavedList = props => (
    <div className="container resultsPanel">
      <div className="panel panel-primary">
        <div className="panel-heading">Saved Articles</div>
        <div className="panel-body">
        Dev note: Problems with MongoDB and routes preventing save buttons from working and articles from populating.
           <ul className="list-group">{props.children}</ul>
        </div>
      </div>

    </div>
  
  )



