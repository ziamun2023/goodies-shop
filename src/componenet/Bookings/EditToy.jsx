import React from 'react';

const EditToy = ({handleUpdate,description,price,quantity,email,proname,name}) => {
    return (
        <div>
           {/* The button to open modal */}
<label htmlFor="my-modal-5" className="btn">edit </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{proname}</h3>
    <input type="text"  defaultValue={email}/>
    <input type="text"  defaultValue={price}/>
    <input type="text"  defaultValue={quantity}/>
    <input type="text"  defaultValue={description}/>
    <button onClick={handleUpdate} className='btn bg-red-200 font-semibold'>Update</button>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">Yay!</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default EditToy;