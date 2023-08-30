import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const {completeBucketItem, removeBucketItem, editBucketItem} = props
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list

    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit()

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    
    // Hint: use a ternary operator
    <div className={item.complete ? `bucket row complete ${item.eagerness}` : `bucket-row ${item.eagerness}`} key={index}>
      
      <div key={index} onClick={()=>{
        completeBucketItem(item.id)
      }}>
   
          {item.text}
      </div>

      <div className="icons">
        
        <p onClick={()=>{
          editBucketItem(item.id, edit)
        }}> ✏️</p>

        <p onClick={()=>{
          removeBucketItem(item.id)
        }}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
