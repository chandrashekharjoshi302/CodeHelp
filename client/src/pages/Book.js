import React from "react";

function Book(){
    return (
        <div style={{marginTop:"100px"}}>
          <div>
          Switch Case
          <a href ="/Switch.pdf" target = "_blank">Preview</a>
          <a href ="/Switch.pdf" download>Download</a>
          </div>
          <div>
          Pattern Making
          <a href ="/Pattern.pdf" target = "_blank">Preview</a>
          <a href ="/Pattern.pdf" download>Download</a>
          </div>
          <div>
          Sorting
          <a href ="/Sorting.pdf" target = "_blank">Preview</a>
          <a href ="/Sorting.pdf" download>Download</a>
          </div>
          <div>
          Overview
          <a href ="/Notes.pdf" target = "_blank">Preview</a>
          <a href ="/Notes.pdf" download>Download</a>
          </div>
         
        </div>
    );
}


export default Book;