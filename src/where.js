import React from "react";

const Where = () => {
    const tab =["ZnanyLakraz","Doctoralia","MioDotore","DoktorTakvimi","ZnamyLekar"]
    return (
    <div className="flexdiv">
      <div style={{width:"300px"}}>
        <h3 style={{color:"#00ccb1"}}>We are a global company with local culture</h3>
      </div>
    <div style={{display:"flex",flexWrap:"wrap",marginLeft:"120px"}}>{tab.map(el => <div style={{display:"flex", justifyContent:"space-around",marginLeft:"10px"}}><img src="https://www.docplanner.com/img/sygnet.png" height="20" style={{margin:"7px"}} /><p className="names">{el}</p></div>)}</div>
    </div>
  );
};

export default Where;



