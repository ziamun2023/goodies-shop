import React from 'react';

const MoreDetails = ({name,email,description}) => {

    return (
        <div>
            {/* The button to open modal */}
<label htmlFor="my-modal-5" className="btn">details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{name}</h3>
    <small>{email}</small>
    <p className="py-4">{description}</p>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">ok!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default MoreDetails;